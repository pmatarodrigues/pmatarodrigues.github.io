import React from 'react';
import '../tailwind.output.css';
import { Github } from '@icons-pack/react-simple-icons';
import { Link } from 'react-feather';

function Projects() {

    const dataProjects = [
        {
            "title": "Music-Repo",
            'description': 'Web app using ASP.NET ',
            'language': 'C#',
            "year": "2018",
            'type': 'School Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/music-repo',
            'thumbnail': ''
        },
        {
            "title": "Road Runner",
            'description': 'Desktop game developed using Processing 3 ',
            'language': 'Processing',
            "year": "2018",
            'type': 'School Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/roadrunner',
            'thumbnail': ''
        },
        {
            "title": "Personal App",
            'description': 'Presentation mobile app.',
            'language': 'Java / Android',
            "year": "2018",
            'type': 'School Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/personal-mobile-app',
            'thumbnail': ''
        },
        {
            "title": "ToBuyIt",
            'description': 'Mobile app for a mockup supermarket.',
            'language': 'Java / Android',
            "year": "2018",
            'type': 'School Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/ToBuyIt',
            'thumbnail': ''
        },
        {
            "title": "Rick and Morty - Arcade Game",
            'description': 'Arcade Super Mario-like game based on Rick and Morty TV Show.',
            'language': 'Javascript',
            "year": "2018",
            'type': 'School Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/rick-morty-arcade-game',
            'thumbnail': ''
        },
        {
            "title": "Youras Music",
            'description': 'Social network to connect artists, publishers and musicians. (Desktop app)',
            'language': 'Java',
            "year": "2018",
            'type': 'School Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/youras-music',
            'thumbnail': ''
        },
        {
            "title": "muShare",
            'description': 'Social network to share music with friends.',
            'language': 'Javascript',
            "year": "2019",
            'type': 'School Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/muShare',
            'thumbnail': 'mushare.png'
        },
        {
            "title": "Sport Finder",
            'description': 'Find the best places to do sports wherever you are ',
            'language': 'Java / Android',
            "year": "2019",
            'type': 'School Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/sport-finder',
            'thumbnail': ''
        },
        {
            "title": "BlockIT",
            'description': 'Tool to block IP address from accessing network using DOS attack ',
            'language': 'Shell',
            "year": "2019",
            'type': 'School Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/sport-finder',
            'thumbnail': ''
        },
        {
            "title": "Positioning System - Image Recognition",
            'description': 'Android app to increase the precision of maps using the phone\'s camera ',
            'language': 'Java / Android',
            "year": "2019",
            'type': 'School Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/positioning-system-image-recognition',
            'thumbnail': 'app-positioning-system.gif'
        },
        {
            "title": "Notify Horario-UM",
            'description': 'Receive notifications when your class schedule is changed. (University of Minho only)',
            'language': 'Python',
            "year": "2019",
            'type': 'Tool',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/notify-horario-um',
            'thumbnail': ''
        },
        {
            "title": "Space Glued Words",
            'description': 'Small project built to add spaces and split words that were glued on a pdf file. (Natural Language Processing)',
            'language': 'Python',
            "year": "2020",
            'type': 'Tool',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/notify-horario-um',
            'thumbnail': ''
        },
        {
            "title": "SharEat",
            'description': 'Create and save grocery lists without account.',
            'language': 'ReactJS, NodeJS, Mongo',
            "year": "2020-",
            'type': 'Side Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/shareat',
            'thumbnail': 'shareat.gif'
        },
        {
            "title": "FoodEat",
            'description': 'Mobile application to help choose a restaurant for the next meal. "You don\'t know where to eat? We\'ll choose for you."',
            'language': 'ReactJS',
            "year": "2020-",
            'type': 'Side Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/foodeat',
            'thumbnail': 'foodeat.gif'
        },
        {
            "title": "Spickles",
            'description': 'Mobile app to choose movies in a group.',
            'language': 'React Native',
            "year": "2020-2021",
            'type': 'School Project',
            'url': '',
            'github': 'https://github.com/Yusoi/Spickles',
            'thumbnail': 'spickles.gif'
        },
        {
            "title": "AirFinance",
            'description': 'Finance Portfolio Manager and Tracker ',
            'language': 'React, Go, PostgreSQL',
            "year": "2020-",
            'type': 'Side Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/airfinance',
            'thumbnail': ''
        },
        {
            "title": "SuperSimpleTODO",
            'description': 'Super simple to use to-do list written in Go ',
            'language': 'Go',
            "year": "2021",
            'type': 'Tool',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/supersimpletodo',
            'thumbnail': ''
        },
        {
            "title": "Snippet Generator",
            'description': 'Generate snippets based on input code (useful for VSCode, Sublime Text, etc...) ',
            'language': 'ReactJS (NextJS)',
            "year": "2021",
            'type': 'Side Project',
            'url': 'https://snippet-generator.pmatarodrigues.com/',
            'github': 'https://github.com/pmatarodrigues/snippet-generator',
            'thumbnail': 'snippet-generator.png'
        },
        {
            "title": "Live Store",
            'description': 'Sell your products while streaming.',
            'language': 'ReactJS, NodeJS',
            "year": "2020-",
            'type': 'Side Project',
            'url': '',
            'github': 'https://github.com/pmatarodrigues/livestore',
            'thumbnail': ''
        },
        // {
        //     "title": "Veggeta",
        //     'description': 'Social network for sharing knowledge and tips about health and environment. ',
        //     'language': 'Java, React Native',
        //     "year": "2021",
        //     'type': 'Side Project',
        //     'url': '',
        //     'github': 'https://github.com/pmatarodrigues/veggeta',
        //     'thumbnail': ''
        // },
        // {
        //     "title": "LongBook",
        //     'description': 'Infinite book to be produced by the community. ',
        //     'language': 'ReactJS, Go',
        //     "year": "2021",
        //     'type': 'Side Project',
        //     'url': '',
        //     'github': 'https://github.com/pmatarodrigues/LongBook',
        //     'thumbnail': ''
        // },
        // {
        //     "title": "rGanizer",
        //     'description': 'Mobile app to help with box organization.',
        //     'language': 'React Native, NodeJS',
        //     "year": "2021",
        //     'type': 'Side Project',
        //     'url': '',
        //     'github': 'https://github.com/pmatarodrigues/rganizer',
        //     'thumbnail': ''
        // },
    ];

    return (
        <div id="achievements" className="p-10 w-full justify-center">
            <div className="justify-center max-w-2xl mx-auto">
                {dataProjects.reverse().map((event, key) => {
                    return (
                        <div>
                            <div className="text-left rounded-md shadow-lg bg-white p-3 mb-8">
                                <img src={`/projects/${event.thumbnail}`} width="100%" className={`pb-3 ${event.thumbnail.length > 1 ? '' : 'hidden'}`} />
                                {/* RIGHT */}
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-green-500" >{event.language}<p className="text-prussian-blue-200">{event.year}</p></p>
                                        <p className="text-gray-800">{event.title}</p>
                                        <p className="text-xs text-gray-500">{event.description}</p>
                                    </div>
                                    <div className="flex justify-between opacity-25">
                                        <a target='_blank' href={event.github}><Github /></a>
                                        <a target='_blank' className={`${event.url.length > 1 ? '' : 'hidden'}`} href={event.url}><Link /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}




export default Projects;
