interface GeneralPatient {
    name: string,
    age: number
    type: "general"
}

interface EmergencyPatient {
    name: string,
    age: number
    type: "emergency"
    emergencyLevel : 1 | 2 | 3
}



const getPatientStatus = (patient: GeneralPatient | EmergencyPatient): string => {
    
    if(patient.type === "general") {
        return "General Patient"
    } 
    
    else if(patient.type === "emergency"){
        if(patient.emergencyLevel === 1){
            return "Critical emergency"
        } else if (patient.emergencyLevel === 2){
            return "Serious emergency"
        }
        
    }
     return "Modarate emergency"
    
}

// console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }))

console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 3 }))