import React, { useEffect, useState } from 'react';
import { Container } from '@/components';
import Body from './Body';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { loadingStart, loadingStop } from '@/redux/action';
import API from '@/api';
import { toast } from 'react-toastify';

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const task_id = router.query.task_id;

  const [taskDetails, setTaskDetails] = useState({ watchers: [] });
  const [milestoneDetails, setMilestoneDetails] = useState([]);
  const statusList = { ASSIGNED: 'Assigned', 'IN PROGRESS': 'In Progress', COMPLETED: 'Completed' };
  const [progressNumber, setProgressNumber] = useState(0);
  const [taskDetailsModalVisibility, setTaskDetailsModalVisibility] = useState(false);
  const [addMilestoneModalVisibility, setAddMilestoneModalVisibility] = useState(false);
  const [editMilestoneModalVisibility, setEditMilestoneModalVisibility] = useState(false);
  const [deleteMilestoneModalVisibility, setDeleteMilestoneModalVisibility] = useState(false);
  const [addMilestoneTitle, setAddMilestoneTitle] = useState('');
  const [addMilestoneDescription, setAddMilestoneDescription] = useState('');
  const [deleteMilestoneData, setDeleteMilestoneData] = useState({ id: '', title: '' });
  const [addMilestoneData, setAddMilestoneData] = useState({
    task: task_id,
    milestones: []
  });

  const [editMilestoneData, setEditMilestoneData] = useState({
    milestone_id: '',
    update_obj: {
      title: '',
      description: '',
      status: ''
    }
  });

  useEffect(() => {
    if (typeof task_id !== 'undefined') {
      setAddMilestoneData((prev) => ({
        ...prev,
        task: task_id
      }));
      getTaskDetails();
      getMilestoneDetails();
    }
  }, [task_id]);

  useEffect(() => {
    if (milestoneDetails.length > 0) {
      const milestoneStatusCompleted = milestoneDetails.filter(
        (item) => item.status === 'COMPLETED'
      );
      const progress = ((milestoneStatusCompleted.length / milestoneDetails.length) * 100).toFixed(
        1
      );
      setProgressNumber(progress);
    }
  }, [milestoneDetails]);

  const getTaskDetails = () => {
    dispatch(loadingStart());
    API.task
      .GetTaskDetails({ task_id: task_id })
      .then((response) => {
        if (response) {
          setTaskDetails(response);
        }
      })
      .finally(() => dispatch(loadingStop()));
  };

  const getMilestoneDetails = () => {
    dispatch(loadingStart());
    API.milestone
      .GetMilestoneDetails({ task: task_id })
      .then((response) => {
        if (response) {
          setMilestoneDetails(response);
        }
      })
      .finally(() => dispatch(loadingStop()));
  };

  const onStatusChange = (data) => {
    dispatch(loadingStart());
    API.milestone
      .EditMilestoneDetails(data)
      .then((response) => {
        if (response) {
          getMilestoneDetails();
        }
      })
      .finally(() => dispatch(loadingStop()));
  };

  const onEditMilestoneClick = () => {
    dispatch(loadingStart());
    API.milestone
      .EditMilestoneDetails(editMilestoneData)
      .then((response) => {
        if (response) {
          toast.success('Milestone Updated successfully');
          getMilestoneDetails();
          setEditMilestoneModalVisibility(false);
        }
      })
      .finally(() => dispatch(loadingStop()));
  };

  const onAddMilestoneClick = () => {
    if (addMilestoneTitle === '' || addMilestoneDescription === '')
      return toast.error('All fields are mandatory');
    const temp = [
      ...addMilestoneData.milestones,
      { title: addMilestoneTitle, description: addMilestoneDescription, status: 'ASSIGNED' }
    ];
    setAddMilestoneData((prev) => ({
      ...prev,
      milestones: temp
    }));
    setAddMilestoneTitle('');
    setAddMilestoneDescription('');
  };

  const onRemoveMilestoneData = (index) => {
    const temp = [...addMilestoneData.milestones];
    temp.splice(index, 1);
    setAddMilestoneData((prev) => ({
      ...prev,
      milestones: temp
    }));
  };

  const onAddMilestoneSubmit = () => {
    dispatch(loadingStart());
    API.milestone
      .CreateMilestone(addMilestoneData)
      .then((response) => {
        if (response) {
          toast.success('Milestones added successfully');
          getMilestoneDetails();
          setAddMilestoneModalVisibility(false);
          setAddMilestoneData((prev) => ({
            ...prev,
            milestones: []
          }));
        }
      })
      .finally(() => dispatch(loadingStop()));
  };

  const onDeleteMilestone = () => {
    dispatch(loadingStart());
    API.milestone
      .DeleteMilestone({ milestone_id: deleteMilestoneData.id })
      .then((response) => {
        if (response) {
          toast.success(`${deleteMilestoneData.title} removed successfully`);
          getMilestoneDetails();
          setDeleteMilestoneModalVisibility(false);
          setDeleteMilestoneData({});
        }
      })
      .finally(() => dispatch(loadingStop()));
  };
  const _this = {
    taskDetails,
    milestoneDetails,
    setMilestoneDetails,
    statusList,
    editMilestoneData,
    setEditMilestoneData,
    onStatusChange,
    editMilestoneModalVisibility,
    setEditMilestoneModalVisibility,
    onEditMilestoneClick,
    addMilestoneModalVisibility,
    setAddMilestoneModalVisibility,
    addMilestoneData,
    setAddMilestoneData,
    addMilestoneTitle,
    setAddMilestoneTitle,
    addMilestoneDescription,
    setAddMilestoneDescription,
    onAddMilestoneClick,
    onRemoveMilestoneData,
    onAddMilestoneSubmit,
    deleteMilestoneData,
    setDeleteMilestoneData,
    deleteMilestoneModalVisibility,
    setDeleteMilestoneModalVisibility,
    onDeleteMilestone,
    taskDetailsModalVisibility,
    setTaskDetailsModalVisibility,
    progressNumber
  };
  return (
    <Container>
      <Body {..._this} />
    </Container>
  );
};

export default Index;
