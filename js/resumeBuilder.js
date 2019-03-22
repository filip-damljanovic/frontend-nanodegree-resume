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
      location: 'Karadjordjeva 36, Uzice'
    },
    welcomeMessage: 'Welcome!',
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'git', 'C#', 'SQL'],
    biopic: 'images/fry.jpg',
    display: function() {
      $('#header').style.display = "block";
    }
  },

  education: {
    schools: [
      {
        name: 'Osnovna škola "Slobodan Sekulić"',
        location: 'Ulica Norveskih interniraca 18, Uzice, Serbia',
        degree: 'II degree',
        majors: ['Serbian', 'Mathematics'],
        dates: 'September 1999- June 2007',
        url: 'http://petaosnovna.com'
      },
      {
        name: 'Tehnička škola - Užice',
        location: 'Trg Svetog Save 34, Uzice, Serbia',
        degree: 'III degree',
        majors: ['Serbian', 'Mathematics'],
        dates: 'September 2007- June 2011',
        url: 'http://www.tehnickaue.edu.rs'
      },
      {
        name: 'Fakultet organizacionih nauka u Beogradu',
        location: 'Jove Ilica 154, Belgrade, Serbia',
        degree: 'IV degree',
        majors: ['Game theory'],
        dates: 'October 2011- July 2017',
        url: 'http://www.fon.bg.ac.rs'
      },
    ],
    onlineCourses: [
      {
        title: 'JavaScript design patterns',
        school: 'Udacity',
        dates: 'February 2019- March 2019',
        url: 'https://www.udacity.com/course/javascript-design-patterns--ud989'
      },
      {
        title: 'JavaScript Intro to AJAX',
        school: 'Udacity',
        dates: 'March 2019',
        url: 'https://www.udacity.com/course/intro-to-ajax--ud110'
      }
    ],
    display: function() {
      $('#education').style.display = "block";
    }
  },

  work: {
    jobs: [
      {
        employer: 'JKP „Infostan tehnologije”',
        title: 'Professional Internship',
        location: 'Danijelova 33, Belgrade, Serbia',
        dates: 'August 2015',
        description: 'Based on instructions for receiving, solving and dealing with reclamations for workers of Service for regular billing – Unified Billing System, it was necessary for certain reports to be transfered to electronic form, and then to explain the use and filling out process for those reports.'
      }
    ],
    display: function() {
      $('#workExperience').style.display = "block";
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
        images: ['images/attendance-app.jpg']
      },
    ],
    display: function() {
      $('#projects').style.display = "block";
    }
  }

};

var controller = {
  getName: function() {
    return model.bio.name;
  },

  getRole: function() {
    return model.bio.role;
  },

  getBioPic: function() {
    return model.bio.biopic;
  },

  getMsg: function() {
    return model.bio.welcomeMessage;
  },

  getSkills: function() {
    return model.bio.skills.join('<br>');
  },

  getContactInfo: function() {
    var contact = model.bio.contacts;
    var formattedMobile = HTMLmobile.replace("%data%", contact.mobile);
    var formattedEmail = HTMLemail.replace("%data%", contact.email);
    var formattedGithub = HTMLgithub.replace("%data%", contact.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", contact.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", contact.location);

    return formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
  },

  getWorkDetails: function() {
    var jobs = model.work.jobs;
    var formattedJobs = '';
    for(var i = 0; i < jobs.length; i++) {
      var job = jobs[i];
      var formattedEmployer = HTMLworkEmployer.replace("#", "http://www.infostan.rs").replace("%data%", job.employer);
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

      formattedJobs += formattedEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;
    }
    return formattedJobs;
  },

  getProjectDetails: function() {
    var projects = model.projects.projects;
    var formattedProjects = '';
    for(var i = 0; i < projects.length; i++) {
      var project = projects[i];
      var formattedProjectTitle = HTMLprojectTitle.replace("#", "https://www.udacity.com/course/javascript-design-patterns--ud989").replace("%data%", project.title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
      var formattedProjectImages = '';
      for(var j = 0; j < project.images.length; j++) {
        var image = HTMLprojectImage.replace("%data%", project.images[j]);
        formattedProjectImages += image;
      }

      formattedProjects += formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImages;
    }
    return formattedProjects;
  },

  getSchoolDetails: function() {
    var schools = model.education.schools;
    var formattedSchools = '';
    for(var i = 0; i < schools.length; i++) {
      var school = schools[i];
      var formattedSchoolName = HTMLschoolName.replace("#", school.url).replace("%data%", school.name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors.join(", "));

      formattedSchools += formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;
    }
    return formattedSchools;
  },

  getOnlineCourses: function() {
    var courses = model.education.onlineCourses;
    var formattedOnlineCourses = '';
    for(var i = 0; i < courses.length; i++) {
      var course = courses[i];
      var formattedCourseTitle = HTMLonlineTitle.replace("%data%", course.title);
      var formattedCourseSchool = HTMLonlineSchool.replace("%data%", course.school);
      var formattedCourseDates = HTMLonlineDates.replace("%data%", course.dates);
      var formattedCourseURL = HTMLonlineURL.replace("#", course.url).replace("%data%", course.url);

      formattedOnlineCourses += formattedCourseTitle + formattedCourseSchool + formattedCourseDates + formattedCourseURL;
    }
    return formattedOnlineCourses;
  }
};

var view = {
  // Project initialization
  init: function() {
    this.initHeader();
    this.initContact();
    this.initWork();
    this.initProjects();
    this.initEducation();
    this.renderMap();
    this.renderFooter();
  },

  initHeader: function() {
    this.formattedName = HTMLheaderName.replace("%data%", controller.getName());
    this.formattedRole = HTMLheaderRole.replace("%data%", controller.getRole());
    this.formattedBioPic = HTMLbioPic.replace("%data%", controller.getBioPic());
    this.formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", controller.getMsg());
    this.formattedSkills = HTMLskills.replace("%data%", controller.getSkills());

    this.renderHeader();
  },

  initContact: function() {
    this.formattedContactInfo = controller.getContactInfo();

    this.renderContact();
  },

  initWork: function() {
    this.formattedJobs = controller.getWorkDetails();

    this.renderWork();
  },

  initProjects: function() {
    this.formattedProjects = controller.getProjectDetails();

    this.renderProjects();
  },

  initEducation: function() {
    this.formattedSchools = controller.getSchoolDetails();
    this.formattedOnlineCourses = controller.getOnlineCourses();

    this.renderEducation();
  },

  // Rendering
  renderHeader: function() {
    $('#header').prepend(this.formattedName);
    $(this.formattedRole).insertAfter('#name');
    $('#header').append(this.formattedBioPic);
    $('#header').append(this.formattedWelcomeMsg);
    $('#header').append(HTMLskillsStart);
    $('#skills').append(this.formattedSkills);
  },

  renderContact: function() {
    $('#topContacts').append(this.formattedContactInfo);
  },

  renderWork: function() {
    $('#workExperience').append(HTMLworkStart);
    $('.work-entry').append(this.formattedJobs);
  },

  renderProjects: function() {
    $('#projects').append(HTMLprojectStart);
    $('.project-entry').append(this.formattedProjects);

    // Set width and height for project pictures
    var imgs = $('.project-entry').children('img');
    for(var i = 0; i < imgs.length; i++) {
      imgs[i].setAttribute('height', '150px');
      imgs[i].setAttribute('width', '220px');
    }

    // Set width and height for last project picture
    imgs.last()[0].setAttribute('height', '300px');
    imgs.last()[0].setAttribute('width', '600px');
  },

  renderEducation: function() {
    // Render schools
    $('#education').append(HTMLschoolStart);
    $('.education-entry').append(this.formattedSchools);

    // Render online classes
    $('.education-entry').append(HTMLonlineClasses);
    $('.education-entry').append(this.formattedOnlineCourses);
  },

  renderMap: function() {
    $('#mapDiv').append(googleMap);
  },

  renderFooter: function() {
    $('#footerContacts').append(this.formattedContactInfo);
  }
};

view.init();