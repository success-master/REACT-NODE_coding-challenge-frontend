
let logs = require('../../json-data/logs.json');
let agents = require('../../json-data/agents.json');
let resolutions = require('../../json-data/resolution.json');

exports.get = (req, res) => {
    let callList = [];
    logs.map((log) => {
        let index = callList.findIndex((item)=>item.number === log.number);
        if(index === -1){
            let temp = log;
            temp['numberOfCalls'] = 1;
            agentIndex =  agents.findIndex((agent)=>agent.identifier === log.agentIdentifier);
            temp['agentName'] = agents[agentIndex].firstName + ' ' + agents[agentIndex].lastName;
            callList.push(temp);
        }else{
            let temp = callList[index];
            temp['numberOfCalls'] ++;
            temp['identifier'] = log['identifier']
            temp['agentIdentifier'] = log['agentIdentifier'];
            temp['dateTime'] = log['dateTime'];
            temp['duration'] = log['duration'];
            agentIndex =  agents.findIndex((agent)=>agent.identifier === log.agentIdentifier);
            temp['agentName'] = agents[agentIndex].firstName + ' ' + agents[agentIndex].lastName;
            callList[index] = temp;
        }   
    })
    return res.json(callList);
};

exports.getAgent = (req, res) => {
    let agentId =  req.params.id;
    
    let agentLogs = logs.filter((log)=>log.agentIdentifier === agentId);
    agentLogs.map((log)=>{
        let resolutionIndex = resolutions.findIndex((res)=>log.identifier === res.identifier);
        log['resolution'] = resolutions[resolutionIndex].resolution;
    })
    return res.json(agentLogs);
};

exports.getCallNumber = (req, res) => {
    let phoneNumber =  req.params.number;
    
    let numberLogs = logs.filter((log)=>log.number === phoneNumber);
    numberLogs.map((log)=>{
        agentIndex =  agents.findIndex((agent)=>agent.identifier === log.agentIdentifier);
        log['agentName'] = agents[agentIndex].firstName + ' ' + agents[agentIndex].lastName;
        let resolutionIndex = resolutions.findIndex((res)=>log.identifier === res.identifier);
        log['resolution'] = resolutions[resolutionIndex].resolution;
    })
    return res.json(numberLogs);
};