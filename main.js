new Vue({
  el: "#app",
  data: {
    name: 'Asseradero Brenes',
    anchoTabla: '',
    gruesoTabla: '',
    largoTabla: '',
    cantTabla: '',
    precioTabla: '',
    medidasTabla: '',
    anchoTuca: '',
    largoTuca: '',
    precioTuca: '',
    medidasTuca: '',
    resultTabla: '',
    totalTabla: '',
    resultTuca: '',
    totalTuca: ''
  },
  computed: {
    calculateTabla: function() {
      this.medidasTabla = ((this.anchoTabla * this.gruesoTabla) /4) * this.largoTabla;
      this.resultTabla = this.medidasTabla * this.cantTabla;
      this.totalTabla = this.resultTabla * this.precioTabla;
      this.resultTabla = this.resultTabla.toFixed(2);
      return this.totalTabla.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    },
    calculateTuca: function() {
      this.medidasTuca = this.anchoTuca /4;
      this.resultTuca = (((this.medidasTuca * this.medidasTuca) * this.largoTuca) /4);
      this.totalTuca = this.resultTuca * this.precioTuca;
      this.resultTuca = this.resultTuca.toFixed(2);
      return this.totalTuca.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    },
  },
  methods: {
    reset(){
      this.anchoTabla = '';
      this.gruesoTabla = '';
      this.largoTabla = '';
      this.cantTabla = '';
      this.precioTabla = '';
      this.anchoTuca = '',
      this.largoTuca = '',
      this.precioTuca = ''
    }
  }
});

const tabs = document.querySelectorAll(".tabs");
const tab = document.querySelectorAll(".tab");
const panel = document.querySelectorAll(".tab-content");

function onTabClick(event) {

// deactivate existing active tabs and panel
for (let i = 0; i < tab.length; i++) {
  tab[i].classList.remove("active");
}

for (let i = 0; i < panel.length; i++) {
  panel[i].classList.remove("active");
}

// activate new tabs and panel
  event.target.classList.add('active');
  let classString = event.target.getAttribute('data-target');
  console.log(classString);
  document.getElementById('panels').getElementsByClassName(classString)[0].classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener('click', onTabClick, false);
}