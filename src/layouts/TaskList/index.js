import React, { useEffect, useState } from 'react';
import { Container } from '@/components';
import Body from './Body';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStart, loadingStop } from '@/redux/action';
import API from '@/api';
import { toast } from 'react-toastify';

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userSession = useSelector((state) => state.session.userSession);
  const customer_email = router.query.customer_email;
  const statusList = {
    assigned: 'Assigned',
    inProgress: 'In Progress',
    onHold: 'On Hold',
    completed: 'Completed'
  };
  const priorityList = ['Low', 'Medium', 'High'];
  const [taskList, setTaskList] = useState([]);
  const [watchersInput, setWatchersInput] = useState('');
  const [addNewTaskModalVisibility, setAddNewTaskModalVisibility] = useState(false);
  const [removeWtacherArrayIndex, setRemoveWatcherArrayIndex] = useState();
  const [removeWatcherDetails, setRemoveWatcherDetails] = useState({ id: '', watcher: '' });
  const [removePrimaryWatcherModalVisibility, setRemovePrimaryWatcherModalVisibility] =
    useState(false);
  const [removeAssociatedWatcherModalVisibility, setRemoveAssociatedWatcherModalVisibility] =
    useState(false);
  const [deleteTaskModalVisibility, setDeleteTaskModalVisibility] = useState(false);
  const [editTaskModalVisibility, setEditTaskModalVisibility] = useState(false);
  const [deleteTaskData, setDeleteTaskData] = useState({ id: '' });
  const [addNewTaskData, setAddNewTaskData] = useState({
    title: '',
    description: '',
    customer_email: customer_email,
    assignees: [userSession.email],
    watchers: [customer_email],
    status: '',
    due_date: '',
    expected_start_date: '',
    priority: ''
  });
  const [editTaskData, setEditTaskData] = useState({
    task_id: '',
    update_obj: {
      title: '',
      description: '',
      customer_email: '',
      assignees: [],
      status: '',
      due_date: '',
      expected_start_date: '',
      priority: ''
    },
    watchers: []
  });

  useEffect(() => {
    if (customer_email !== '') {
      setAddNewTaskData((prev) => ({
        ...prev,
        customer_email: customer_email,
        assignees: [userSession.email],
        watchers: [customer_email]
      }));
      getTaskList();
    }
  }, [customer_email]);

  const getTaskList = () => {
    dispatch(loadingStart());
    API.business
      .GetTasks({ customer_email: customer_email })
      .then((response) => {
        setTaskList(response);
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const onAddNewTaskClick = () => {
    if (
      addNewTaskData.title === '' ||
      addNewTaskData.description === '' ||
      addNewTaskData.customer_email === '' ||
      addNewTaskData.assignees === [] ||
      addNewTaskData.watchers === [] ||
      addNewTaskData.due_date === '' ||
      addNewTaskData.expected_start_date === '' ||
      addNewTaskData.priority === ''
    ) {
      return toast.error('All fields are mandatory.');
    } else if (
      Date.parse(addNewTaskData.expected_start_date) > Date.parse(addNewTaskData.due_date)
    ) {
      return toast.error('Cannot select the Due date less than Expected Start Date');
    }
    dispatch(loadingStart());
    API.task
      .CreateNewTask(addNewTaskData)
      .then((response) => {
        if (response) {
          getTaskList();
          setAddNewTaskModalVisibility(false);
          setAddNewTaskData({
            title: '',
            description: '',
            customer_email: customer_email,
            assignees: [userSession.email],
            watchers: [customer_email],
            status: '',
            due_date: '',
            expected_start_date: '',
            priority: ''
          });
          toast.success('Task Created Successfully');
        }
      })
      .finally(() => dispatch(loadingStop()));
  };

  const onEditTaskClick = () => {
    if (
      editTaskData.title === '' ||
      editTaskData.description === '' ||
      editTaskData.customer_email === '' ||
      editTaskData.assignees === [] ||
      editTaskData.watchers === [] ||
      editTaskData.due_date === '' ||
      editTaskData.expected_start_date === '' ||
      editTaskData.priority === ''
    ) {
      return toast.error('All fields are mandatory.');
    } else if (Date.parse(editTaskData.expected_start_date) > Date.parse(editTaskData.due_date)) {
      return toast.error('Cannot select the Due date less than Expected Start Date');
    }
    const temp = { ...editTaskData };
    temp.watchers = temp.watchers.map((item) => item.watcher);
    dispatch(loadingStart());
    API.task
      .EditTask(temp)
      .then((response) => {
        if (response) {
          getTaskList();
          setEditTaskModalVisibility(false);
          setEditTaskData({
            task_id: '',
            update_obj: {
              title: '',
              description: '',
              customer_email: '',
              assignees: [''],
              watchers: [''],
              status: '',
              due_date: '',
              expected_start_date: '',
              priority: ''
            },
            watchers: ['']
          });
          toast.success('Task Edit Successfully');
        }
      })
      .finally(() => dispatch(loadingStop()));
  };
  const onTaskDelete = () => {
    dispatch(loadingStart());
    API.task
      .DeleteTask(deleteTaskData)
      .then((response) => {
        if (response) {
          toast.success('Task removed successfully');
          getTaskList();
          setDeleteTaskModalVisibility(false);
        }
      })
      .finally(() => dispatch(loadingStop()));
  };

  const onAddWatcher = () => {
    if (addNewTaskModalVisibility === true) {
      if (watchersInput === '') return toast.error('BlanK watchers cannot be added');
      const temp = [...addNewTaskData.watchers, watchersInput];
      setAddNewTaskData((prev) => ({
        ...prev,
        watchers: temp
      }));
      setWatchersInput('');
    } else if (editTaskModalVisibility === true) {
      if (watchersInput === '') return toast.error('BlanK watchers cannot be added');
      const temp = [...editTaskData.watchers, { watcher: watchersInput }];
      setEditTaskData((prev) => ({
        ...prev,
        watchers: temp
      }));
      setWatchersInput('');
    }
  };

  const onRemoveWatcher = (index) => {
    if (addNewTaskModalVisibility === true) {
      const temp = [...addNewTaskData.watchers];
      if (addNewTaskData.watchers[index] === customer_email) {
        return setRemoveWatcherArrayIndex(index), setRemovePrimaryWatcherModalVisibility(true);
      }
      temp.splice(index, 1);
      setAddNewTaskData((prev) => ({
        ...prev,
        watchers: temp
      }));
    } else if (editTaskModalVisibility === true) {
      const temp = [...editTaskData.watchers];
      if (editTaskData.watchers[index]._id) {
        return (
          setRemoveAssociatedWatcherModalVisibility(true),
          setRemoveWatcherDetails((prev) => ({
            ...prev,
            id: editTaskData.watchers[index]._id,
            watcher: editTaskData.watchers[index].watcher
          })),
          setRemoveWatcherArrayIndex(index)
        );
      }
      temp.splice(index, 1);
      setEditTaskData((prev) => ({
        ...prev,
        watchers: temp
      }));
    }
  };

  const onRemoveWatcherInModal = () => {
    if (addNewTaskModalVisibility === true) {
      const temp = [...addNewTaskData.watchers];
      temp.splice(removeWtacherArrayIndex, 1);
      setAddNewTaskData((prev) => ({
        ...prev,
        watchers: temp
      }));
      setRemovePrimaryWatcherModalVisibility(false);
    } else if (editTaskModalVisibility === true) {
      const temp = [...editTaskData.watchers];

      // dispatch(loadingStart());
      API.task.DeleteWatcher({ id: removeWatcherDetails.id }).then((response) => {
        if (response) {
          getTaskList();
          toast.success('Watcher removed successfully');
          temp.splice(removeWtacherArrayIndex, 1);
          setEditTaskData((prev) => ({
            ...prev,
            watchers: temp
          }));
          setRemoveAssociatedWatcherModalVisibility(false);
          setRemoveWatcherDetails((prev) => ({ ...prev, id: '', watcher: '' }));
        }
      });
      // .finally(() => dispatch(loadingStop()));
    }
  };

  const makeCamelCaseWords = (str) => {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
  };

  const _this = {
    taskList,
    addNewTaskModalVisibility,
    setAddNewTaskModalVisibility,
    statusList,
    priorityList,
    setAddNewTaskData,
    addNewTaskData,
    setWatchersInput,
    watchersInput,
    onAddWatcher,
    onRemoveWatcher,
    customer_email,
    removePrimaryWatcherModalVisibility,
    setRemovePrimaryWatcherModalVisibility,
    onRemoveWatcherInModal,
    onAddNewTaskClick,
    makeCamelCaseWords,
    onTaskDelete,
    deleteTaskModalVisibility,
    setDeleteTaskModalVisibility,
    deleteTaskData,
    setDeleteTaskData,
    editTaskModalVisibility,
    setEditTaskModalVisibility,
    editTaskData,
    setEditTaskData,
    onEditTaskClick,
    removeAssociatedWatcherModalVisibility,
    setRemoveAssociatedWatcherModalVisibility,
    removeWatcherDetails,
    setRemoveWatcherDetails
  };

  return (
    <Container>
      <Body {..._this} />
    </Container>
  );
};

export default Index;
