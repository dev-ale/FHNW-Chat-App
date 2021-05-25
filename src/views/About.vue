<template>
  <v-container>
    <v-card min-height="60vh" color="third">
      <v-card-text>
        <v-card-title>
          <v-spacer></v-spacer>
        <v-spacer></v-spacer></v-card-title>
        <v-row>
          <v-col>
            <h2>Technologien</h2>
            <br>
                <v-expansion-panels>
              <v-expansion-panel class="primary white--text" v-for="technologie in technologien" :key="technologie.index">
                <v-expansion-panel-header><strong>{{technologie.title}}</strong></v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-col>
                    {{technologie.beschreibung}}
                  </v-col>
                  <v-col align="end">
                    <v-btn :href="technologie.url" target="_blank" small class="text--primary" color="accent">Mehr</v-btn>
                  </v-col>

                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
          <v-col>
            <h2>Features</h2>
            <br>
            <v-expansion-panels>
              <v-expansion-panel class="primary white--text" v-for="feature in features" :key="feature.index">
                <v-expansion-panel-header><strong>{{feature.title}}</strong></v-expansion-panel-header>
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
        beschreibung: "Benutzer können sich registrieren. Es wird keine Bestätigungsmail versandt. Mailadresse mit @fhnw.ch Endung = führt zur Benutzerrolle 'Dozent' (Chaträume erstellen, eigene wieder löschen). Alle anderen Mailadressen führen zur Benutzerrolle 'Student' (nur Chatten in vorhandenen Räumen). Ausgewählte User = Admin Rolle (löschen und erstellen der Räume, unabhängig vom Ersteller)."
      },
      {
       title: "Einloggen",
       beschreibung: "Registrierte Benutzer können sich mit ihrem erstellten Login einloggen. Diese bleiben dank JWT Authentication auch nach beenden des Browser eingeloggt."
      },
      {
       title: "Input Validation",
       beschreibung: "Benutzer brauchen eine valide E-Mail oder ein valides Passwort. Auch in den Nachrichten werden Leere Strings oder String welche nur Leerschläge beinhalten können nicht als Nachricht gesendet."
      },
      {
       title: "Passwort Encryption",
       beschreibung: "Passwörter werden mittels bcrypt verschlüsselt und sicher in der Datenbank abgelegt."
      },
      {
       title: "Protected Routes",
       beschreibung: "Folgende Routes (/dashboard, /chat) sind durch die Authentifizierung des Users mittels Token geschützt."
      },
      {
        title: "Protected API Endpoints",
        beschreibung: "Auch die Endpunkte wie 'GET rooms', 'POST room', oder 'DELETE room:id' sind alle Protected und können nur mittels Berechtigung aufgerufen werden."
      },
      {
        title: "Echtzeitkommunikation",
        beschreibung: "Die App ermöglicht eine Echtzeitkommunikation für beliebig viele Nutzer."
      },
      {
       title: "Cloud Application Heroku",
       beschreibung: "Bereitstellung der Chat Applikation auf der Herokuplattform. Projekt ist über öffentliche Domain zugänglich. Projekt wird bei Push auf Master erfolgreich deployed."
      },
      {
        title: "Mobile friendly",
        beschreibung: "Die App ist mobile friendly und kann auf jedem beliebigen Smartphone ausgeführt werden."
      },
      {
        title: "PWA (Progressive Web App) Support",
        beschreibung: "Die App lässt sich über Chrome oder als PWA auf einem Smartphone installieren."
      },
     ],
     technologien: [
       {
         title: "Vue.js" ,
         beschreibung: "Vue.js ist ein clientseitiges JavaScript-Webframework zum Erstellen von Single-Page-Webanwendungen nach dem MVVM-Muster, es kann allerdings auch in Multipage-Webseiten für einzelne Abschnitte verwendet werden.",
         url: "https://vuejs.org/"
       },
       {
         title: "Node.js(Express)",
         beschreibung: "Express ist ein einfaches und flexibles Node.js-Framework von Webanwendungen, das zahlreiche leistungsfähige Features und Funktionen für Webanwendungen und mobile Anwendungen bereitstellt.",
         url: "https://expressjs.com/de/"
       },
       {
         title: "MongoDB Atlas",
         beschreibung: "MongoDB Atlas ist der globale Cloud-Datenbank-Service für moderne Anwendungen. Stellen Sie vollständig verwaltete MongoDB in AWS, Google Cloud und Azure bereit, mit erstklassiger Automatisierung und bewährten Verfahren, die Verfügbarkeit, Skalierbarkeit und die Einhaltung der anspruchsvollsten Datensicherheits- und Datenschutzstandards garantieren.",
         url: "https://www.mongodb.com/cloud"
       },
       {
         title: "Socket.io",
         beschreibung: "Socket.IO ermöglicht Echtzeit-, bidirektionale und ereignisbasierte Kommunikation. Es funktioniert auf jeder Plattform, jedem Browser und jedem Gerät und konzentriert sich gleichermaßen auf Zuverlässigkeit und Geschwindigkeit.",
         url: "https://socket.io/"
       },
       {
         title: "Heroku (Deployment)",
         beschreibung: "Heroku ist eine containerbasierte Cloud Platform as a Service (PaaS). Entwickler verwenden Heroku zum Bereitstellen, Verwalten und Skalieren moderner Anwendungen. Die Plattform ist elegant, flexibel und einfach zu bedienen. Sie bietet den einfachsten Weg, Anwendungen schnell auf den Markt zu bringen. Heroku ist vollständig verwaltet und gibt Entwicklern die Freiheit, sich auf das Kernprodukt zu konzentrieren, ohne die Anwendungsinfrastruktur warten zu müssen.",
         url: "https://heroku.com/"
       },

     ]
    }
  }

}
</script>
