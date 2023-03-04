import IMG1 from './Logos/ProjectImg.png'
import Linux from './Logos/LinuxLogo.png'
import Windows from './Logos/WindowsLogo.png'
import CPP from './Logos/C++Color.png'
import SQL from './Logos/MySQL-Logo.png'
import PHP from './Logos/PHPLogo.png'

const data = [
    {
        id: 1,
        image: IMG1,
        platform: Linux,
        language: CPP,
        title: 'Poly Calculator',
        github: 'https://github.com/xJuan21/PolyCalculator-w-Stack',
        description: 'Polynomial Calculator made with a Stack. User can add, subtract, multiply, or divide polynomial expressions.',
        category: ["C++", "Linux"]
    },
    {
        id: 2,
        image: IMG1,
        platform: Linux,
        language: CPP,
        title: 'Sudoku Solver',
        github: 'https://github.com/xJuan21/SudokuSolver',
        description: 'A program that will interpret a Sudoku puzzle from a .txt file and recursively solve it and print it in the terminal.',
        category: ["C++", "Linux"]
    },
    {
        id: 3,
        image: IMG1,
        platform: Windows,
        language: CPP,
        title: 'Project Title',
        github: 'https://github.com/xJuan21/PolyCalculator-w-Stack',
        description: 'Brief Description',
        category: ["C++", "Windows"]
    },
    {
        id: 4,
        image: IMG1,
        platform: SQL,
        language: PHP,
        title: 'Project Title',
        github: 'https://github.com/xJuan21/PolyCalculator-w-Stack',
        description: 'Brief Description',
        category: ['SQL']
    },
    {
        id: 5,
        image: IMG1,
        platform: Windows,
        language: CPP,
        title: 'Project Title',
        github: 'https://github.com/xJuan21/PolyCalculator-w-Stack',
        description: 'Brief Description',
        category: ['C++']
    },
    {
        id: 6,
        image: IMG1,
        platform: Windows,
        language: CPP,
        title: 'Project Title',
        github: 'https://github.com/xJuan21/PolyCalculator-w-Stack',
        description: 'Brief Description',
        category: ['C++']
    }
]
export default data;