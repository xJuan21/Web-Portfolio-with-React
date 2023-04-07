import IMG1 from './Logos/ProjectImg.png'
import Linux from './Logos/LinuxLogo.png'
import Windows from './Logos/WindowsLogo.png'
import CPP from './Logos/C++Color.png'
import SQL from './Logos/MySQL-Logo.png'
import PHP from './Logos/PHPLogo.png'
import JavaScript from './Logos/JS_Logo.png'

const data = [
    {
        id: 1,
        image: IMG1,
        platform: Linux,
        language: CPP,
        title: 'Poly Calculator',
        github: 'https://github.com/xJuan21/PolyCalculator-w-Stack',
        description: 'Polynomial Calculator made with a Stack. User can add, subtract, multiply, or divide polynomial expressions.',
        category: ["Backend", "C++", "Linux"]
    },
    {
        id: 2,
        image: IMG1,
        platform: Linux,
        language: CPP,
        title: 'Sudoku Solver',
        github: 'https://github.com/xJuan21/SudokuSolver',
        description: 'A program that will interpret a Sudoku puzzle from a .txt file and recursively solve it and print it in the terminal.',
        category: ["Backend", "C++", "Linux"]
    },
    {
        id: 3,
        image: IMG1,
        platform: Linux,
        language: CPP,
        title: 'Code Beautifier',
        github: 'https://github.com/xJuan21/PolyCalculator-w-Stack',
        description: 'Lexical Analyzer that follows a set of rules to auto-indent code or any type of text.',
        category: ["C++", "Linux"]
    },
    {
        id: 4,
        image: IMG1,
        platform: SQL,
        language: PHP,
        title: 'Project Title',
        github: 'https://github.com/xJuan21/PolyCalculator-w-Stack',
        description: 'Brief Description',
        category: ["Backend", "Database","PHP"]
    },
    {
        id: 5,
        image: IMG1,
        platform: Windows,
        language: CPP,
        title: 'Project Title',
        github: 'https://github.com/xJuan21/PolyCalculator-w-Stack',
        description: 'Brief Description',
        category: ["Backend", 'C++', "Windows"]
    },
    {
        id: 6,
        image: IMG1,
        platform: Windows,
        language: CPP,
        title: 'Project Title',
        github: 'https://github.com/xJuan21/PolyCalculator-w-Stack',
        description: 'Brief Description',
        category: ["Frontend", 'C++', "Windows"]
    },
    {
        id: 7,
        image: IMG1,
        platform: Windows,
        language: JavaScript,
        title: 'Web Portfolio',
        github: 'https://github.com/xJuan21/PolyCalculator-w-Stack',
        description: 'Brief Description',
        category: ["Frontend", "JavaScript", "Windows"]
    }
]
export default data;