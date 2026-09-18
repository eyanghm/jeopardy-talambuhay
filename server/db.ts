import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What US state is the Garden State?',
        answer: 'New Jersey',
    },
    {
        points: 200,
        question:
            'When was the first case of COVID-19 recorded in the US?',
        answer: '2020 (Year I moved from NJ to NY)',
    },
    {
        points: 300,
        question:
            'What is the end date of the Cancer zodiac sign?',
        answer: 'July 22 (Also my birthday!)',
    },
    {
        points: 400,
        question: 'What country is 1 of the 2 that have square flags?',
        answer: 'Switzerland (First European country I visited)',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'This is Donu, a character from which video game?',
            imgSrc: '/donu-gif.gif',
            answer: 'Slay the Spire',
        },
        {
            points: 100,
            question:
                'Tahini is made from which seed?',
            imgSrc: 'https://www.aforkstale.com/wp-content/uploads/how-to-make-homemade-tahini-1200-x-1200.jpg',
            answer: 'Sesame',
        },
        {
            points: 200,
            question: 'What programming language is the below code?',
            imgSrc: '/programming_language.png',
            answer: 'Javascript',
        },
        {
            points: 300,
            question:
                'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
            imgSrc:
                "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
            answer: 'Italy',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This type of 2D drawing allows you to see the sides of a 3D object at the same scale.',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: 'Isometric',
    }
]);


const categories = [
    {
        title: 'Ella\'s Past',
        questions: pastQuestions
    },
    {
        title: `Ella's Hobbies and Interests'`,
        questions: presentQuestions
    },
    {
        title: "Ella's Favorites",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}