document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      people: [ 
                { 
                  name: "Neil Desai",
                  bio: "likes to get crazy",
                  bioVisible: false
                },
                {
                  name: "Lebron James",
                  bio: "plays basketball", 
                  bioVisible: false 
                },
                {
                  name: "Tom Brady",
                  bio: "plays football",
                  bioVisible: false
                }
                ],
          
          newPeopleName: "",
          newPeopleBio: "",
          

    },
    mounted: function() {

    },
    methods: {
      toggleBio: function(inputPerson) {
        inputPerson.bioVisible = !inputPerson.bioVisible;
      },
      addPerson: function() {
        var newPerson = {
                         name: this.newPersonName,
                         bio: this.newPersonBio,
                         bioVisible: false
                        };
        this.people.push(newPerson);
        this.newPersonName = "";
        this.newPersonBio = "";
      },
      deletePerson: function(inputPerson) {
        var index = this.people.indexOf(inputPerson);
        this.people.splice(index, 1);
      }
    },
    computed: {

    }
  });
});


