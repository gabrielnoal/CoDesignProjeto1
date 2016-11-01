
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDjE6r8TD6ghYEIUwhpVTkoEmP5Gl4Nxz8",
    authDomain: "projeto-2-teste-ab.firebaseapp.com",
    databaseURL: "https://projeto-2-teste-ab.firebaseio.com",
    storageBucket: "projeto-2-teste-ab.appspot.com",
    messagingSenderId: "859132742998"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  logs = this.database.ref('projeto-2-teste-ab');

 function envia(tipo_evt, user_id_var, tempo_var, versao_var){
  this.logs.push(
  {
  user_id: user_id_var,
  tempo: tempo_var,
  versao: versao_var,
  tipo: tipo_evt
  }
  );
 }


function tempo_inicial(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("inicio", id_pessoa, d, versao);
}

