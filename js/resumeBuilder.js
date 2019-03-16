/*
This is empty on purpose! Your code to build the resume will go here.
 */
var model = {
  bio: {
    name: 'Filip Damljanovic',
    role: 'Junior developer',
    contacts: {
      mobile: '064/648xxxx',
      email: 'fdamljanovic@gmail.com',
      github: 'https://github.com/filip-damljanovic',
      twitter: '@fiLip_LFC',
      location: 'Uzice, Serbia'
    },
    welcomeMessage: 'Welcome!',
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'git', 'C#', 'SQL'],
    biopic: 'https://www.jack969.com/wp-content/uploads/sites/13/2017/07/The-Queen-biopic-is-finally-happening-1024x576.jpg',
    display: function() {
      return false;
    }
  },

  education: {
    schools: [
      {
        name: 'Slobodan Sekulic',
        location: 'Uzice, Serbia',
        degree: 'II degree',
        majors: ['Serbian', 'Mathematics'],
        dates: 'September 1999- June 2007',
        url: 'petaosnovna.com'
      },
      {
        name: 'Tehnicka skola, Uzice',
        location: 'Uzice, Serbia',
        degree: 'III degree',
        majors: ['Serbian', 'Mathematics'],
        dates: 'September 2007- June 2011',
        url: 'www.tehnickaue.edu.rs'
      },
      {
        name: 'Fakultet organizacionih nauka',
        location: 'Belgrade, Serbia',
        degree: 'IV degree',
        majors: ['Game theory'],
        dates: 'October 2011- July 2017',
        url: 'www.fon.bg.ac.rs'
      },
    ],
    onlineCourses: [
      {
        title: 'JavaScript design patterns',
        school: 'Udacity',
        dates: 'February 2019- March 2019',
        url: 'https://classroom.udacity.com/courses/'
      },
      {
        title: 'JavaScript Intro to AJAX',
        school: 'Udacity',
        dates: 'March 2019',
        url: 'https://classroom.udacity.com/courses/'
      }
    ],
    display: function() {
      return false;
    }
  },

  work: {
    jobs: [
      {
        employer: 'Infostan',
        title: 'Internship',
        location: 'Belgrade, Serbia',
        dates: 'August 2017',
        description: 'Based on instructions for receiving, solving and dealing with reclamations for workers of Service for regular billing – Unified Billing System, it was necessary for certain reports to be transfered to electronic form, and then to explain the use and filling out process for those reports.'
      }
    ],
    display: function() {
      return false;
    }
  },

  projects: {
    projects: [
      {
        title: 'Udacity JavaScript design patterns project- Cat clicker',
        dates: 'February 2019- March 2019',
        description: 'Building a cat clicker app, using MV* pattern.',
        images: [
          'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
          'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
          'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
          'https://lh3.ggpht.com/cesD31eroFxIZ4IEeXPAJkx_8i5-haU3P9LQosGNfV-GfAPUh2bE4iw4zV6Mc9XobWOR70BQh2JAP57wZlM=s0#w=640&h=480'
        ]
      },
      {
        title: 'Udacity JavaScript design patterns project- Attendance app',
        dates: 'February 2019- March 2019',
        description: 'Building attendance app, using MV* pattern.',
        images: ['No images were used.']
      },
    ],
    display: function() {
      return false;
    }
  }

};

var octopus = {
  getName: function() {
    return model.bio.name;
  }
};

var view = {
  init: function() {
    this.formattedName = HTMLheaderName.replace("%data%", octopus.getName());

    this.render();
  },
  
  render: function() {
    $('#header').append(this.formattedName);
  }
};

view.init();