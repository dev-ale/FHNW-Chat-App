<template>
  <v-container>
    <v-card height="80vh">
      <v-card-text>
        <v-card-title>
          <v-spacer></v-spacer>
        <v-spacer></v-spacer></v-card-title>
        <v-row>
          <v-col>
            <h2>Technologien</h2>
            <br>
                <v-expansion-panels>
              <v-expansion-panel v-for="technologie in technologien" :key="technologie.index">
                <v-expansion-panel-header>{{technologie.title}}</v-expansion-panel-header>
                <v-expansion-panel-content>{{technologie.beschreibung}}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
          <v-col>
            <h2>Features</h2>
            <br>
            <v-expansion-panels>
              <v-expansion-panel v-for="feature in features" :key="feature.index">
                <v-expansion-panel-header>{{feature.title}}</v-expansion-panel-header>
                <v-expansion-panel-content>{{feature.beschreibung}}</v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row> 
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import Room from "@/components/Room";
export default {
  components: {Room},
  data: function(){
    return {
      features: [{
        title: "Registrieren", 
        beschreibung: "Mailadresse mit @fhnw.ch Endung = Dozent (Chaträume erstellen, eigene wieder löschen). Alle anderen Mailadressen = Rolle Student (nur Chaten in vorhandenen Räumen). Ausgewählte User = Admin Rolle (löschen und erstellen der Räume, unabhängig vom Ersteller)."
      },
      {
       title: "Einloggen",
       beschreibung: "Registrierte Benutzer können sich mit ihrem erstellten Login einloggen."
      },
      {
       title: "Input Validation",
       beschreibung: "Leer Strings oder String welche nur Leerschläge beinhalten können nicht als Nachricht gesendet werden."
      },
      {
       title: "Passwort Encryption",
       beschreibung: "Die Passwörter sind in verschlüsselter Form in der Datenbank gespeichert."
      },
      {
       title: "Protected Routes",
       beschreibung: "Sämtliche Routes sind durch die Authentifizierung des Users mittels Token geschützt. "
      },
      {
       title: "HTTPS & REST API Requests",
       beschreibung: ""
      },
      {
       title: "Cloud Application Heroku",
       beschreibung: "Bereitstellung der Chat Applikation auf der Herokuplatform. Projekt Setup, deployen der Applikation ist nicht mehr nötig."
      },
     ],
     technologien: [
       {
         title: "Vue.js" ,
         beschreibung: "Wird als Frontend-Framework verwendet."
       },
       {
         title: "Node.js(Express)",
         beschreibung: "Wir als Backend-Framework verwendet."
       },
       {
         title: "MongoDB Atlas",
         beschreibung: "Wird als Datenbank verwendet."
       },
       {
         title: "Socket.io ",
         beschreibung: "Server welcher für die Echtzeit und bidirektionale Kommunikation der Chats verwendet wird."
       },
      
     ]
    }
  }
  
}
</script>
