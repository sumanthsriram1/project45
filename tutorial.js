class Tutorial{
    constructor(x,y){
        this.tutorialButton = createButton("INFO")
        this.tutorialButton.position(x,y)
        this.tutorialButton.class("customButton")
        this.goal = createElement('h2')
        this.instruction = createElement('h2');
        this.title = createElement("h1");
        this.title.html("STICK MARIO")
        this.title.position(400, 60);
        this.title.class("gameTitle");
        this.playButton = createButton("PLAY")
        this.playButton.position(x,y-80)
        this.playButton.class("customButton")
    } 

    display(){

        this.tutorialButton.mousePressed(()=>{
            this.tutorialButton.hide()
            var goal = "The goal of the game is to get the stick man to the finish line across the obstacles."
            this.goal.position(200, 150);
            this.goal.html(goal);
            this.goal.class("leadersText")
            var instruction = "Press SPACE to jump, and use the right arrow key to move across the obstacles. Good Luck!";
            this.instruction.position(200,260)
            this.instruction.html(instruction)
            this.instruction.class("leadersText")
            
        })

        this.playButton.mousePressed(()=>{
            this.tutorialButton.hide()
            this.playButton.hide()
            gameState = "play";
            this.goal.hide()
            this.instruction.hide()
        })
        
      
    }
}