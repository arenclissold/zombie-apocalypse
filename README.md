# Zombie Apocalypse 🧟

## Description
After the nuclear war, a strange and deadly virus has infected the planet producing mindless zombies. These zombies now wander the world converting any remaining living creatures they find to zombies as well.

The world is represented by an n x n grid on which zombies and creatures live.

The location of zombies and creatures can be addressed using zero-indexed x-y coordinates. The top left corner of the world is (x: 0, y: 0). The horizontal coordinate is represented by x, and the vertical coordinate is represented by y.

At the beginning of the program, a single zombie awakes and begins to move around the grid following a sequence of movements. Valid movements are Up, Down, Left, Right. The movement sequence is represented by a string of single character movements, e.g. RDRU (Right, Down, Right, Up).

Zombies can move through the edge of the grid, appearing on the directly opposite side. For a 10x10 grid, a zombie moving left from (0, 4) will move to (9, 4); a zombie moving down from (3, 9) will move to (3, 0).

Each time a zombie takes a step, the new location should be logged, eg: zombie 0 moved to (2,3).

If a zombie occupies the same square as a creature, the creature is transformed into another zombie.

Each time a zombie infects a creature this should be logged, eg:

zombie 0 infected creature at (3,3)

The creatures are aware of the zombie’s presence but are so frightened that they never move.

Once a zombie has completed its movement, the first newly created zombie moves using the same sequence as the original zombie, then the second newly created zombie moves, and so on, in order of infection. Each zombie performs the same sequence of moves. Once all zombies have completed moving, the final positions of all zombies and creatures should be output, then the program ends.

Your task is to write a program that runs the above simulation using the following input parameters:
- dimensions of the grid (N),
- the initial position of the zombie,
- a list of initial positions of the creatures ,
- and a list of moves the zombies will make,


Example input:
- 4
- (3,1)
- (0,1)(1,2)(1,1)
- RDRU

Example output:
- zombies’ positions: (1,1)(2,1)(3,2)(3,1)
- creatures’ positions: none
