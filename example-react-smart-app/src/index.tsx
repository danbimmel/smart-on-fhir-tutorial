import * as React from "react";
import ReactDOM  from "react-dom/client";
import { oauth2 as SMART } from "fhirclient";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
// SMART.authorize({
//   clientId: '6186517d-0143-4b5d-96f0-4f890ea3d8d5',
//   scope: [
//       "launch",           // Get the launch context in EHR launch mode
//       "openid profile",  // Get the current user
//       "patient/Encounter.read", // Read Encounter data
//       "patient/Patient.read",   // Read patient data
//       "patient/Observation.read",// Read obversation data
//       "online_access"
//     ].join(" "),
//     completeInTarget: true
// })
SMART.init({
    iss:
        "https://launch.smarthealthit.org/v/r3/sim/eyJoIjoiMSIsImIiOiJzbWFydC0xNjQyMDY4IiwiZSI6InNtYXJ0LVByYWN0aXRpb25lci03MTYxNDUwMiJ9/fhir",
    redirectUri: "test.html",
    clientId: "6186517d-0143-4b5d-96f0-4f890ea3d8d5",
    scope: "launch/patient patient/Observation.read online_access openid fhirUser",

//     // WARNING: completeInTarget=true is needed to make this work in the codesandbox
//     // frame. It is otherwise not needed if the target is not another frame or window
//     // but since the entire example works in a frame here, it gets confused without
//     // setting this!
//     completeInTarget: true
})
    .then(client => {
        // Fetch MedicationRequest and Patient in parallel to load the app faster
        return Promise.all([
            client.patient.read(),
            client.request(`/MedicationRequest?patient=${client.patient.id}`, {
                resolveReferences: "medicationReference",
                pageLimit: 0,
                flat: true
            })
        ]);
    })
    .then(
        ([patient, meds]) => {
            root.render(<App patient={patient} meds={meds} />);
        },
        error => {
            console.error(error);
            root.render(
                <>
                    <br />
                    <pre>{error.stack}</pre>
                </>
            );
        }
    );

