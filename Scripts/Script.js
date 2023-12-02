


// Alterar o texto dos elementos ao efectual o hover

const valueTitle = document.querySelector('#valueTitle');
const valueText = document.querySelector('#valueText');
const missionText = document.querySelector('#missionText');

const defaultValueTitle = document.querySelector('#valueTitle').textContent;
const defaultValueText = document.querySelector('#valueText').textContent;
const defaultMissionText = document.querySelector('#missionText').textContent;


// 1º Valor
const value1 = document.querySelector('#value1');
value1.addEventListener('mouseover', function(){
    valueTitle.textContent = "Constant Innovation";
    valueText.textContent = "We embrace innovation as a foundational cornerstone. We relentlessly pursue new approaches, ideas, and technologies to enhance our creations, offering players unique and cutting-edge experiences.";
})

value1.addEventListener('mouseout', function(){
    valueTitle.textContent = defaultValueTitle;
    valueText.textContent = defaultValueText;
})



// 2º Valor
const value2 = document.querySelector('#value2');
value2.addEventListener('mouseover', function(){
    valueTitle.textContent = "Passion for Excellence";
    valueText.textContent = "Our commitment to excellence is fueled by passion. We strive for perfection in every detail, from conception to implementation, ensuring our games deliver the utmost in quality and excitement.";
})

value2.addEventListener('mouseout', function(){
    valueTitle.textContent = defaultValueTitle;
    valueText.textContent = defaultValueText;
})



// 3º Valor
const value3 = document.querySelector('#value3');
value3.addEventListener('mouseover', function(){
    valueTitle.textContent = "Resilient Community";
    valueText.textContent = "We nurture a united community that values diversity, respect, and collaboration. Through positive interactions and idea-sharing, we strengthen our player base and foster a welcoming environment for all.";
})

value3.addEventListener('mouseout', function(){
    valueTitle.textContent = defaultValueTitle;
    valueText.textContent = defaultValueText;
})



// 4º Valor
const value4 = document.querySelector('#value4');
value4.addEventListener('mouseover', function(){
    valueTitle.textContent = "Unlimited Exploration";
    valueText.textContent = "We embrace curiosity and the constant quest for new horizons. We are willing to explore genres, mechanics, and narratives, challenging conventional boundaries to create astonishing and diverse gaming experiences.";
})

value4.addEventListener('mouseout', function(){
    valueTitle.textContent = defaultValueTitle;
    valueText.textContent = defaultValueText;
})



// 5º Valor
const value5 = document.querySelector('#value5');
value5.addEventListener('mouseover', function(){
    valueTitle.textContent = "Continuous Growth";
    valueText.textContent = "We believe that learning is an endless journey. We continuously seek to evolve, refining our skills, industry understanding, and connection with our players. Our dedication to growth forms the bedrock of our lasting success.";
})

value5.addEventListener('mouseout', function(){
    valueTitle.textContent = defaultValueTitle;
    valueText.textContent = defaultValueText;
})



/*
// Missão
const ourMission = document.querySelector('#ourMission');
ourMission.addEventListener('mouseover', function(){
    missionText.textContent = "Texto da nossa Missão";
})

ourMission.addEventListener('mouseout', function(){
    missionText.textContent = defaultMissionText;
})
*/


// Fundadores 
const founderTitle = document.querySelector('#founderTitle');
const founderText = document.querySelector('#foundersText');

const founder1 = document.querySelector('#founder1');
const founder2 = document.querySelector('#founder2');


founder1.addEventListener('mouseover', function(){
    founderTitle.textContent = "CEO - Erasmo Mutemba";
    founderText.textContent = "With a degree in Electronic and Computer Engineering, he brings comprehensive skills that span from game development to programming, marketing, and strategic planning.";
})

founder2.addEventListener('mouseover', function(){
    founderTitle.textContent = "Creative Director - Dilton Banze";
    founderText.textContent = "With a degree in Software Development, he contributes as a 3D modeler. Proficient in software like ZBrush and Blender, he excels in character design, adding a unique artistic approach to our projects.";
})