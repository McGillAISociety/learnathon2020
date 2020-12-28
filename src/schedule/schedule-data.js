export default [
  {
    // Months are zero-indexed for whatever reason
    // This is a historical artifact from the Java (yes, Java) APIs
    date: new Date(2021, 2, 6),
    events: [
      {
        time: '9:00AM-10:00AM EST',
        event1: 'Livestream begins',
        event2: '',
        sponsorevent: '',


      },
      {
        time: '10:00AM-10:45AM EST',
        name: 'Opening Remarks',
      },
      {
        time: '10:45AM-11:15AM EST',
        name: 'Team Formation',
      },
      {
        time: '11:00AM EST',
        name: 'Hacking Starts',
      },
      {
        time: '1:00PM-2:00PM EST',
        name: 'Workshop 1',
      },
      {
        time: '2:00PM-3:00PM EST',
        name: 'Activity 1',
      },
      {
        time: '3:00PM-4:00PM EST',
        name: 'Workshop 2',
      },
      {
        time: '4:00PM-5:00PM EST',
        name: 'Activiy 2',
      },
      {
        time: '5:00PM-6:00PM EST',
        name: 'Workshop 3: Understanding Human Pose by Wrnch',
      },
      {
        time: '9:00PM EST',
        name: 'Activity 3',
      },
      {
        time: '12:00AM EST',
        name: 'Activity 4',
      }
    ]
  },
  {
    date: new Date(2021, 2, 7),
    events: [
      {
        time: '7:00AM EST',
        name: 'Good morning message!',
      },
      {
        time: '11:00AM EST',
        name: 'Submission Deadline & Activity 5',
      },
      {
        time: '12:00PM-2:00PM EST',
        name: 'Judging Period',
      },
      {
        time: '3:00PM-3:45PM EST',
        name: 'Awards and Closing Ceremony',
      }

    ]
  }
];
