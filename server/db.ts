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
                'What language is this?',
            imgSrc: '/chinese.jpg',
            answer: '2020',
    },
    {
        points: 300,
        question:
            'What is the end date of the Cancer zodiac sign?',
        answer: 'July 22',
    },
    {
        points: 400,
        question: 'What country is 1 of the 2 that have square flags?',
        answer: 'Switzerland',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'What branch of math studies the sizes, shapes, positions, and dimensions of things?',
            answer: 'Geometry',
        },
        {
            points: 200,
            question:
                'What sport have Alexandra Trusova, Yuzura Hanyu, and Yuna Kim all competed in?',
            answer: 'Figure Skating',
        },
        {   
            points: 300,
            question:
                'A group of these animals is called a waddle on land, a raft in the water, and a colony or rookery when nesting',
            answer: 'Penguin',
        },
        {
            points: 400,
            question: 'What city and country is this?',
            imgSrc: '/Spain.png',
            answer: 'Madrid, Spain',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What art medium is this?',
        imgSrc:
            "/graphite.jpg",
        answer: 'Graphite',
    },

    {
        points: 200,
        question:
            'What school logo is this? When would a student in the class of 2025 graduate college?',
        imgSrc:
            '/chicago.png',
        answer: 'University of Chicago, 2029',
    },

    {
        points: 300,
        question:
            'What country was bubble tea invented in?',
        answer: 'Taiwan',
    },

    {
        points: 400,
        question:
            'What store is this?',
        imgSrc:
            '/miniso.jpg',
        answer: 'Miniso',
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