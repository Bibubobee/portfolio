/// TODO: Agregar negritas, subrayado y otras decoraciones para volver más interesante la lectura.
# Proyectos
## Watch my Clok
**small_desc:** "Very short challenge where you have to keep a clock from breaking by picking up their falling pieces. Made for the 2026 GOTM game jam."

**full_desc:** "When the theme for the 2026 GMTK jam was revealed to be 'Countdown' I was really excited. Time sensitive mechanics are one of those things that I really think there's a lot left to explore.<br/><br/> The game centers around a clock that is ticking and pieces fall out of the spots where the second hand jumps to. You as the player have to drag the pieces back to their place, or else the second hand might reach an empty slot and break the clock. It might sound simple, but the game has a lot of weird tricks to keep you from repairing it, it might turn off the lights, make the ground shake, or even avoid you."

**my_work:** "
<ul>
    <li>Game design and direction. Aside from bringing the initial concept of the game, I was in charge of leading the project. This meant:
    <ul> 
        <li>Explaining everything that I wanted from the game</li>
        <li>Making sure that everyone knew what they had to do</li>
        <li>Make quick decisions about the art, music and mechanics so that they fit my idea.</li>
        <li>Most important of all, listening the feedback and ideas from my team and integrating them into my vision.</li>
    </ul>
    <li>Programming for the following: 
    <ul>
        <li>Mouse controls (basic movement, grabbing and putting sticks back into place).</li>
        <li>Random events system that chooses which event to trigger.</li> 
        <li>Difficulty progression system with Godot's Resources (also known as Scriptable Objects in Unity). Each round is saved in a resource with its dedicated data, allowing for fast and simple iteration of the game's balance.</li>
        <li>Win and lose conditions.</li>
        <li>Event activation controller with reusable architecture (Orchestration with resources for each event).</li>
        <li>Clock slots behavior: Created a script that allowed to change the amount of slots for the clock and reflect that immediately in-engine.</li>
        <li>Stick and Second Hand behavior: Sticks drop in a random interval and can be attached when close enough. Second hand moves at a tick speed in a direction which can be changed during runtime.</li>
    </ul>
</ul>"

## Fish Catcher
**small_desc:** "A game based on old LCD games that I'm making to learn about game design for arcade-style games."

**full_desc:** "Remember those old LCD electronic games? Well I fell in love with them after trying out the Game & Watch Gallery series and decided to make this game to learn what makes them so fun and addictive while also being really simple.<br/><br/>Fish Catcher (I really need to think of a new name) is a modern adaptation of that style of gameplay where you catch fish while avoiding hazards and keeping your bucket empty to get the best rank."

**my_work:** "Besides the art I did everything for this game, which includes: 
<ul>
    <li>Game Design. A lot of iteration on ideas to find out which ones where the most fun plus easier to do.</li>
    <li>Programming of all gameplay systems: 
    <ul>
        <li>Player controls.</li>
        <li>Spawning system that takes into account rounds, spawn probabilites and rules to prevent impossible or bothersome situations.</li> 
        <li>Game balance with custom spreadsheet imports.</li> 
        <li>Round-based progression with Godot's Resource system.</li> 
        <li>Unlockables manager that listens to game events and checks if an objective has been completed.</li>
        <li>Enemy behavior.</li>
    </ul>
    <li>UI/UX programming with Godot's Control nodes.</li>
    <li>Various polishing such as squish and stretch for movement and UI transition animations</li>
    <li>Creation of sounds, some with traditional capturing methods and others with the help of programs such as Famitracker or ChipTone.</li>
    <li>Implementation of art and sounds into the Engine.</li>
</ul>"

## Under Roots

**small_desc:** "3D Action Platformer inspired by the Ape Escape series where you catch robot bugs, cut plants and sneak around to finish levels."

**full_desc:** "Have you ever played Ape Escape? Well, this game is heavily inspired on it. The game features big, beautiful worlds where you play as a frog that captures robot-insects gone rogue.<br/><br/> For this game I took the role of Lead Programmer, so I was in charge of programming and coordinating systems for a team of 2 developers besides myself."

**my_work:** " 
<ul>
    <li>Worked closely with game designer to make systems that were easy to tweak and quick to expand.</li>
    <li>Programming for player character: 
    <ul>
        <li>Player movement that allow easy modifications for designers. Floor, aerial and crouch velocity with their respective parameters, quick turn-arounds, diving, jumping and bouncing.</li>
        <li>Componentization of player animation scripts to increase readability and bug tracking.</li>
        <li>Bug net gadget: Takes command inputs like those seen in fighting games.</li> 
        <li>Scissors gadget: Changes player stance to cut plants in different heights.</li> 
        <li>Radar gadget: Calculates if a bug's position is in the direction that the radar points to and notifies the player via the HUD.</li>
        <li>Gadget controller: Orchestrates resources, game objects and HUD elements to equip, activate and notify for animation reproduction.</li> 
    </ul>
    <li>Architecture design and documentation of the following gameplay systems:</li>
    <ul>
        <li>Save manager.</li>
        <li>Gadget system coordination with HUD and resources.</li>
        <li>Player states such as crouch, walk, airborne and gadgets.</li>
    </ul>
    
</ul>"

## Lilly & Willy

**small_desc:** "2D Platformer where you and a friend control 2 rats to help them escape a laboratory."

**full_desc:** "Lilly & Willy is a 2 player platformer about two sibling mice trying to escape from a laboratory full of traps and dangers. Push buttons, bounce on springs and avoid hazards to reach the end. Oh, and don't forget to grab some cheese along the way."

**my_work:** " 
<ul>
    <li>Level design. The game has two types of levels:</li>
    <ul>
        <li>Runners: Long auto-scrollers where the players have to reach the end. Enemy placement, obstacle cycles and using coins as hints were really important here.</li>
        <li>Puzzlers: One screen levels where the player has to move objects or press different buttons to reach the end. Figuring out new ways to use old mechanics and combining them in interesting layouts was my focus for these levels.</li>
    </ul>
    <li>Programming for the following: 
    <ul>
        <li>Player movement: horizontal movement and jump mechanics with exported variables to facilitate balancing.</li>
        <li>Pushing component: Player and enemy behavior is separated into plug-and-play components. Player and enemies can have the push component while objects like springs have the pushable component.</li>
        <li>Bounce component that applies upward velocity to entities that have the trait. Thanks to the component system we could make springs that bounce on other springs.</li> 
        <li>Behavior for very basic enemies.</li> 
        <li>Button and block system, each button activates a set of blocks on the level.</li> 
        <li>Save data system with JSON to allow for updates that don't break previous savefiles.</li>
        <li>Level unlocks system with Godot's Resources.</li> 
    </ul>
</ul>"

## Bajo Tierra

**small_desc:** "2D Platformer where you can bury on the ground and ceiling to reach new places."

**full_desc:** "Inspired by collect-a-thons, Bajo Tierra is a very short game where you control a weird little bug that can go underground to reach new places.<br><br>I made this game for my thesis where I proposed a set of design patterns that explain the objective of games and evaluated them through this experience."

**my_work:** " 
<ul>
    <li>Besides the art, I did everything for this game. A large part of the assets are from the awesome Kenney, I just added colors to them. Please <a href="https://kenney.nl/assets/category:2D">check him out</a></li>
    <li>Created four versions of the game, each with different tutorials, ways to illustrate mechanics and hints to guide the player through levels.</li>
    <li>Level design. This game features big levels with a lot of diverging paths. Some of the things I had to take into account while making levels were:</li>
    <ul>
        <li>Coin placement to hint players into desirable paths.</li>
        <li>Use of background elements to hint in the same way.</li>
        <li>Hiding collectables in places that were fun to reach.</li>
    </ul>
    <li>Burying mechanic where the player becomes smaller to enter tight spaces on the ground or ceiling.</li>
    <li>Playtested this game with 30 players to gather data to analyze the design patterns effects and compare each version of the game.</li> 
    </ul>
</ul>"

## SPELLRAIN

**small_desc:** "Vampire Survivors-like where you help a little mage restore a small town using spells and upgrading armor."

**full_desc:** "SPELLRAIN is a vampire survivors-like that focuses on diverse spells, armor customization and combining everything to make awesome builds.<br><br>This was the first big game that I worked on and was my first step into truly learning programming for videogames, so I learned a lot from it."

**my_work:** " 
<ul>
    <li>Programming for the following:</li>
    <ul>
        <li>First time I designed and implemented a round-based progression system.</li>
        <li>Spell systems: mana, cooldown, casting (with different types) and equipping.</li> 
        <li>Unique abilities for each set of armor via components</li>
        <li>Spell upgrades that change stats but also some behavior (e.g: Shoot two at once or make it bigger)</li>
    </ul>
    <li>Optimized the game from only supporting 30 entities at once before lagging to over 200 changing enemy collision behavior.</li> 
    <li>First time designing architecture for use of Godot's Resources in the project.</li>
    <li>Designed and implemented the architecture for the armor skill system using the components pattern.</li>
    <li>Designed and programmed the behavior for the game's bosses.</li> 
    </ul>
</ul>"

## Rhythm Match-3

**small_desc:** "Puzzle game inspired by the Puzzle League series where the rhythm of the song clears the lines."

**full_desc:** "A puzzle game based on games like Tetris Attack (actually called Panel de Pon) where every four beats the lines are cleared.<br><br>Although short, the game turned out pretty fun and I actually learned a lot about programming monolithic systems for games that have very strict rules."

**my_work:** " 
<ul>
    <li>Programming for the following:</li>
    <ul>
        <li>Player Controller: Cursor movement, rotation and switching blocks.</li>
        <li>Board simulation to handle positions and rules efficiently. Game is played in the simulation and the result is translated visually so both matrices have to be coordinated at all times.</li>
        <li>Block clearing system: blocks are highlighted when a valid combination for clearing them is met. Every four beats all of them are cleared.</li> 
        <li>Blocks falling after clears and checking if the board has any new possible clears.</li>
        <li>Locking blocks: If a block falls in a valid clear combination, then it gets locked, making it impossible to move and increasing the combo.</li>
    </ul>
    <li>Studied and applied DFS algorithm and variations to find valid clear patterns efficiently.</li>
    </ul>
</ul>"