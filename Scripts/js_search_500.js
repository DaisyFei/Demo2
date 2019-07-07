    /**
     * fumeExperiment.js
     * Lin Fei
     * 
     * Javascript file for Dynamic Moral Decision Experiment
     * Adapted from Gamble Experiment and Choice Experiment
     * note: this requires jQuery and JsPsych
     * 
     **/

    /* jshint esversion: 6, loopfunc:true */

    /**
    * Variable declaration section
    * -----------------------------------------------------------------------------
    **/
    
//    var participantCode = "";
//    var participantGender = "";
//    var participantAge = "";
//    var firstLang = "";
    var strategy = "";
    var problems = "";
    var device = "";
    var comment = "";
    var similar = "";

    var spaceBar = 32;




    // The timeline that the sections of the experiment is pushed on
    var tline = [];
    /**
    *
    * Experiment introduction
    * -----------------------------------------------------------------------------
    **/

//    // These are mTurk-specific functions for getting the mTurk ID and for generating the random
//    $.urlParam = function(name){
//        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
//        if (results==null){
//           return null;
//        }
//        else{
//           return results[1] || 0;
//        }
//    }
    

// warn users before they try to leave the page if the experiment has not been completed
    window.onbeforeunload = function (event) {
        if (doNotClose) {
            var warningText = "Your participant data will be lost";
            event.returnValue = warningText;
            return warningText;
        }
    };

    // Informs the user about full screen
    var full_screen = {
        type: 'html-keyboard-response',
        stimulus:'<center><br><br>Welcome to Study 2 of the experiment!<br><br>Please work on a <b>desktop or laptop</b> for this experiment.<br><br> Please do <b> NOT </b> refresh or exit the page because your data might be lost.',
        choices:' ',
        prompt: 'Press the space bar to continue.</center>',
        on_finish: function (data) {
            doNotClose = true;
            // start the experiment timer
            start = new Date();
        }       
    };
    tline.push(full_screen);
    
//    //Eliciting MTurk ID
//    var participation_code = {
//        type: "survey-text",
//        questions:[{prompt:'<p style="margin-left: 20%; margin-right: 20%; text-align:left;">All data will be used for academic research purposes. We appreciate your participation in advance.<br><br>Please work on all studies in a <b>distraction-free</b> environment. Please pay full attention to the studies in this HIT as you may be questioned about some details at the end. These memory questions will be super easy if you indeed pay full attention to the studies. <br><br>All studies in this HIT are independent. They are not related to each other. Please use a keyboard in this HIT.<br><br>If you understood these instructions, please enter your <b>Mturk ID</b> below: ',required : true}],
//        on_finish:function(data){
//            var responses = JSON.parse(data.responses);
//            participantCode = responses.Q0;
//        }
//    }
//    
//    
//    var gender_block = {
//        type: "survey-multi-choice",
//        questions: [{prompt:'<p style="margin-left: 20%; margin-right: 20%; text-align:left;">What is your gender?',options: ["Male", "Female", "Prefer not to say"],required:true}],
//        on_finish: function (data) {
//            var responses = JSON.parse(data.responses);
//            participantGender = responses.Q0;
//        }  
//    };
//
//    var age_block = {
//        type: "survey-numdate",
//        questions: [{prompt:'<p style="margin-left: 20%; margin-right: 20%; text-align:left;">What is your age?<br>If you prefer not to say, leave the response area blank.', min:18}],
//        on_finish: function (data) {
//            var responses = JSON.parse(data.responses);
//            participantAge = responses.Q0.substr(0,2);
//        }
//    };
//
//    var language_block = {
//        type: "survey-text",
//        questions: [{prompt:'<p style="margin-left: 20%; margin-right: 20%; text-align:left;">What is your first language?',required:true}],
//        on_finish: function (data) {
//            var responses = JSON.parse(data.responses);
//            firstLang = responses.Q0.substr(0,2);
//        }
//    };
    
//    tline.push(participation_code);
//    tline.push(gender_block);
//    tline.push(age_block);
//    tline.push(language_block);

    var inst1 = {
        type: 'html-keyboard-response',
        stimulus:'<p style="margin-left: 20%; margin-right: 20%; text-align:left;"><b>Important</b>: We will instruct you what keys to press on each webpage. Pressing uninstructed keys may terminate the study without recording data, which yields a rejection of your HIT.',
        choices:' ',
        prompt: 'Please press "space" to continue.</center>'
    };

    var inst2 = {
        type: 'html-keyboard-response',
        stimulus:'<p style="margin-left: 20%; margin-right: 20%; text-align:left;">In addition to the participation payment of the entire survey, you will earn a bonus depending on your decisions in this task. You will first read the instructions for the study and then go straight into the task. There will be no practice rounds, and all decisions are final. Please focus when working on the task and avoid distractions. After the task, you will answer a few questions, and you will receive the verification code after successfully completing this study.<br><br><b>Important</b>: We will instruct you what keys to press on each webpage. Pressing uninstructed keys may terminate the study without recording data, which yields a rejection of your HIT.',
        choices:' ',
        prompt: 'Please press "space" to continue.</center>'
    };


    var inst3 = {
        type: 'html-keyboard-response',
        stimulus:'<center>Coin Searching</center><br><br><p style="margin-left: 20%; margin-right: 20%; text-align:left;">You will examine coins in a sequence, one by one. The size of the coin indicates the size of your bonus; that is, the larger the coin, the better. <br><br>When examining each coin, you need to decide right away whether to take it or leave it. </p><br><br><ul style= "margin-left: 20%; margin-right: 20%; text-align:left;list-style-type:disc;"><li>If you leave it (by pressing N), that coin is gone for good and will not return. You will move on to the next coin.</li><li>If you take it (by pressing Y), you will receive the payment indicated by that specific coin. <b>You will not see the rest of the coins and the search will end.</b></li></ul><br><br><p style="margin-left: 20%; margin-right: 20%; text-align:left;">The coins you will examine are randomly selected from a huge treasure chest. This sequence contains 500 coins in total for your examination, but you can stop searching at any point.</p>',
        choices:' ',
        prompt: 'Once you are ready, please press "space" to continue and start the coin searching.'
    };

    tline.push(inst1);
    tline.push(inst2);
    tline.push(inst3);
    

   var randomCode = 100000 + Math.floor(Math.random() * 99999);   
   var participantCode = randomCode;

//        //////////////////////
//        ///Read in the file///
//        ////////////////////// 
//
//        // Holds all of the data
//        var dataSet;
//
//        // The number of lines of data in the file
//        var dataLineTotal = 101;
//
//        // Holds the value of the data line currently being processed
//        var dataLine;
//
//        // Request object that sends the file request
//        var dataReq = new XMLHttpRequest();
//
//        dataReq.onreadystatechange = function() {
//
//            // When the data file is opened, if it succeeds, process the data
//            if (this.readyState === 4 && this.status === 200) {
//            // This splits the data into dataSet by line, and then splits
//                // it again to have arrays within dataSet with individual string
//                // values for each data entry.
//                dataSet = (dataReq.responseText).split("\n");
//                for (dataLine = 0; dataLine < dataLineTotal; ++dataLine) {
//                        dataSet[dataLine] = dataSet[dataLine].split(",");
//                }
//            //console.log(dataSet);
//            }
//
//        };
//        
//        var fileRoute = "trials.csv";
//
//        // Sends the request for the data of filename.format
//        dataReq.open("GET", fileRoute, false);
//        dataReq.send();
//
//
//    // Main Experiment
//    shuffle(dataSet)
//    console.log(dataSet)

      //setup the circles and random radii
      var total = 500;
      var radius = [];
      for (var r = 0; r < total;r++){
          radius.push(Math.round(Math.random()*200)+20);
      }
      shuffle(radius);
        console.log(Math.max(radius));
        var max = radius[0]
        for(var i = 0; i < total; i++){
            if(radius[i] > max)
                max = radius[i]
        }
        console.log(max);
 
        //////////////////////
        ///       End      ///
        ////////////////////// 


    /////////// 
    ///MAIN////
    ///////////

    //array to hold the circle information [circle index, circle size]
    circle_info = [0, 0];
     //all of the circle trials (setting up the subtimeline)
      var trials = []
      for (var i = 0; i< total; i++){
        if(i%2 == 0){
          var ftsize = "font-size:" + radius[i] + "px; color: #bc9c27; position: relative;";
        }
        else {
          var ftsize = "font-size:" + radius[i] + "px; color: #9e6521; position: relative;";
        }
          trials.push({
            stimulus: '<p style="' + ftsize + '">&#11044;</p>',
            circle_number: i + 1,
            circle_size: radius[i]
          });
      }

    var trialNum = 0;


     //trial2: with a subtimeline of all of the circle trials
     var trial2 = {
         type: 'html-keyboard-response-circles',
         choices: ['y', 'n'],
         prompt: '<p style="margin: 0; position: absolute; top: 20%; left: 50%; transform: translate(-50%, -50%);">Press Y, if you want to take it. You won\'t see the rest of the coins.<br>Press N, if you want to leave it. You will move on to the next coin.</p>',
         on_finish: function(data) {
          if (data.key_press == 89) {
            jsPsych.endCurrentTimeline();
            updateCircleNumber([this.circle_number, this.circle_size]);
          }
          saveExperiment(true);
        },
        timeline: trials //the subtimeline
     }
     tline.push(trial2);
    


//Demographics

    var inst4 = {
        type: 'html-keyboard-response',
        stimulus:'<p style="margin-left: 20%; margin-right: 20%; text-align:left;">Your searching has ended! Before you find out your payment, please answer the next few questions very honestly.  Your answers won\'t affect your payment.',
        choices:' ',
        prompt: 'Please press "space" to continue.</center>'
    };

    var strategy = {
        type: "survey-text",
        questions:[{prompt: '<p style="margin-left: 20%; margin-right: 20%; text-align:left;">Can you tell us a little bit about your strategy? How do you decide when to stop looking for more circles?  We would like to hear about your thought process as much as you care to share. ', rows: 10, columns: 60}],
        on_finish: function (data) {
            var responses = JSON.parse(data.responses);
            strategy = responses.Q0.substr(0,2);
            saveExperiment(true);
        }
    }
    
    var problems = {
        type: "survey-multi-choice-other",
        questions: [{prompt:"Did you experience any technical difficulty?",options: ["No"],
                     other:true,other_text: "Yes, please specify: ",required:true}],
        on_finish: function (data) {
            var responses = JSON.parse(data.responses);
            problems = responses.Q0;
            saveExperiment(true);
        }
    }
    
    var comment = {
        type: "survey-text",
        questions:[{prompt: '<p style="margin-left: 20%; margin-right: 20%; text-align:left;">Did you find anything in this HIT confusing? We appreciate anything you care to share. ', rows: 10, columns: 60}],
        on_finish: function (data) {
            var responses = JSON.parse(data.responses);
            comment = responses.Q0.substr(0,2);
            saveExperiment(true);
        }
    }

    var device = {
        type: "survey-multi-choice-other",
        questions: [{prompt:"What kind of device are you using to work on this HIT?",
                     options: ["Desktop or Laptop", "Tablet or Ipad", "Mobile Phone"],other:true, required:true}],
        on_finish: function (data) {
            var responses = JSON.parse(data.responses);
            device = responses.Q0;
            saveExperiment(true);
        }
    }    
    
    var similar = {
        type: "survey-multi-choice-other",
        questions: [{prompt:"Have you completed any similar studies recently?",options: ["No"],
                     other:true,other_text: "Yes, please specify: ",required:true}],
        on_finish: function (data) {
            var responses = JSON.parse(data.responses);
            similar = responses.Q0;
        }
    }
    
     //trial3: display ending message
   var trial3 = {
       type: 'html-keyboard-response-circles',
       choices: [' '],
         on_start: function(trial){
        trial.stimulus = '<p style="margin: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"> Your selected coin represents '+ Math.round(circle_info[1]/20) +' cents. <br><br> Please press the space bar to finish the experiment.</p>';},
       stimulus: ''
   };



    tline.push(inst4);
    tline.push(strategy);
    tline.push(problems);
    tline.push(comment);
    tline.push(device);
    tline.push(similar);
    tline.push(trial3);


     //initialize
     jsPsych.init({
        timeline: tline,
        fullscreen: true,
        on_finish: function (data) {
            saveExperiment(false);
           $("body").append('<p style="margin: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">The experiment is complete. Thank you very much for participating! Please enter the following code back to the Qualtrics page QKCY'+randomCode+'.</p>');
            doNotClose = false;
         }
      });

    /**
     * 
     * Helper Functions
     * -----------------------------------------------------------------------------------
     * 
     **/


    //This function changes file index to a boolean variable
    function Index2Boolean(index){
        if(index == 1){
            return true;
        }else if(index == 2){
            return false;
        }else{
            return Math.random() >= 0.5;
        }
    }
    

    // This function is implemented based on suggestions by StackOverflow users to use the Durstenfeld shuffle
    // forums: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; --i) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    
    function getCurrentDate() {
        var currentdate = new Date();
        var datetime = currentdate.getDate() + "_" +
            (currentdate.getMonth() + 1) + "_" +
            currentdate.getFullYear();
        return datetime;
    }

    function deletePartialData(filename) {
//        console.log("[DEBUG] deleteData: filename=" + filename)
        $.ajax({
            type: 'post',
            url: 'delete_data.php',
            data: { filename: filename }
        });
    }

    function saveData(filename, filedata) {
        $.ajax({
            type: 'post',
            cache: false,
            url: 'save_data.php', // this is the path to the PHP script
            data: { filename: filename, filedata: filedata }
        });
    }

   function saveExperiment(partial){
        var fullData = jsPsych.data.get();
//        console.log(fullData);

        // take data and output only the relevant pieces
        var expData = getDesiredData(fullData);

        // Set up the filename and final data object
        var saveName = "" + participantCode + "_" + getCurrentDate();
        var csvData = JSON2CSV(expData);
        var currentdate2 = new Date();

        // console.log(csvData);
//        console.log("[DEBUG] saveExperiment: partial=" + partial);
        if (partial) {
            saveName += "_partial";
        } else {
            deletePartialData("" + participantCode + "_" + getCurrentDate() + "_partial" + ".csv");
            saveName += "_"+currentdate2.getHours()+"_"+currentdate2.getMinutes();
        }

        // call the php script to save the data
        saveData(saveName +".csv", csvData);           
    }

    // this function based on code suggested by StackOverflow users:
    // http://stackoverflow.com/users/64741/zachary
    // http://stackoverflow.com/users/317/joseph-sturtevant     
    function JSON2CSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var line = '';
        var result = '';
        var columns = [];
        var finish = new Date();
        var timing = (finish - start)/1000/60;

        // Writes the header, specific to this experiment
        result += '"Participant ID","' +participantCode + '"\r\n';
        result += '"Total","' + total +'"\r\n';
        result += '"Radius","'+radius.join('","')+'"\r\n';
        result += '"MaxRadius","'+getMax(radius)+'"\r\n';
        result += '"MaxIdx","'+indexOfMax(radius)+'"\r\n';
        result += '"Validation Code","' + randomCode + '"\r\n';
        result += '"Date","' + getCurrentDate() + '"\r\n';
        result += '"Total ExperimentTime","' + timing + '"\r\n';
        result += '"Final Size","' +circle_info[1]+'"\r\n';
        result += '"Trial Num","' +circle_info[0]+'"\r\n';   
        result += '"Strategy","' +strategy +'"\r\n';
        result += '"Problems","' +problems +'"\r\n';
        result += '"Comment","' +comment +'"\r\n';
        result += '"Device","' +device +'"\r\n';
        result += '"Similar","' +similar +'"\r\n';
        result += '\r\n';
        var i = 0;
        for (var j = 0; j < array.length; ++j) {
          for (var key in array[j]) {
            var keyString = key + "";
            keyString = '"' + keyString.replace(/"/g, '""') + '",';
            if ($.inArray(key, columns) == -1) {
              columns[i] = key;
              line += keyString;
              i++;
            }
          }
        }

        for (i = 0; i < array.length; ++i) {
          line = '';
          for (j = 0; j < columns.length; ++j) {
            var value = (typeof array[i][columns[j]] === 'undefined') ? '' : array[i][columns[j]];
            var valueString = value + "";
            line += '"' + valueString.replace(/"/g, '""') + '",';
          }

          line = line.slice(0, -1);
          result += line + '\r\n';
        }

        return result;
      }

    function getDesiredData(allData){

        // Stores all the rows to record, each row is its own array within this array        
        var desiredData = [];
        var desiredDataIndex = 0;


        for (var i = 0; i < allData.length; ++i) {
            if (allData[i].trial_type == "html-keyboard-response-circles") {   
                desiredData[desiredDataIndex] = {
                    "TrialNum" : allData[i].TrialNum,
                    "BlockNum" : allData[i].BlockNum,
                    "circle_size": allData[i].circle_size,
                    "keyPressed" : allData[i].key_press,
                    "rt" : allData[i].rt,
                };
                desiredDataIndex++;

            }
        }

//        console.log(desiredData);
        return desiredData;
    }
    
    function booleanToData(bool){
        if(bool){
            return 1;
        }else{
            return 0;
        }
    }

    // Maps response key code to the format expected by the data file for grid trials
    // i.e. z maps to 1, m maps to 2, otherwise it's -1
    function gridCodeToDataCode(keyCode) {
        if (keyCode === spaceBar) {
            return 1;
        } else {
            return -1;
        }
    }    
    
    function randomizeArray(arr){
        temp =  '';
        if(Math.random()>= 0.5){
            temp = arr[0];
            arr[0]= arr[1];
            arr[1] = temp;
        }
        return arr
    }
    function updateCircleNumber(arr){
      circle_info = arr;
    }   

    function indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }

        var max = arr[0];
        var maxIndex = 0;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }

        return maxIndex;
    }

    function getMax(arr){ 
        var max = arr[0]
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > max)
                max = arr[i]
        }
        return max;
    }
