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
        answer: 'Switzerland (First foreign country I visited)',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 300,
            question:
                'A group of these animals is called a waddle on land, a raft in the water, and a colony or rookery when nesting',
            answer: 'Penguin',
        },
        {
            points: 200,
            question:
                'What sport do Alexandra Trusova, Yuzura Hanyu, and Yuna Kim all have in common?',
            answer: 'Figure Skating',
        },
        {
            points: 400,
            question: 'What city and country country is this?',
            imgSrc: 'Spain.png',
            answer: 'Spain',
        },
        {
            points: 100,
            question:
                'What branch of math studies the sizes, shapes, positions, and dimensions of things?',
            answer: 'Geometry',
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
        title: `Ella's Present`,
        questions: presentQuestions
    },
    {
        title: "Ella's Future",
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