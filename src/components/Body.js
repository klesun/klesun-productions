import React from "react";
import styles from "../styles/main.module.scss";
import popularProjects from "../popularProjects";
import GithubLogo from "../images/github-logo-edited.svg";

function Body() {
    return (
        <main className={styles.mainSection}>
            <section className={styles.introSection}>
                <div className={styles.container}>
                    <div className={styles.introSectionMain}>
                        <div className={styles.introSectionMainContainer}>
                            <div className={styles.introSectionMainHeader}>
                                <h3 className={styles.introSectionTitle}>Programming odd jobs</h3>
                            </div>
                            <div className={styles.introSectionSecondaryHeader}>
                                <span className={styles.introSectionTitle}>
                                    A "write a program for me" service. Taking orders of any scale on any technology
                                </span>
                            </div>
                            <div className={styles.introSectionMainDescription}>
                                <p className={styles.sectionMainText}>
                                    Ever had a genius money-maker idea, but had no programming knowledge to implement it? You've come to right place.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.introSectionColumns}>
                        <div className={styles.introSectionBusinessDescription}>
                            <div className={styles.introSectionColumnContainer}>
                                <div className={styles.introColumnContainerHeader}>
                                    <p>
                                        We are writing web apps, desktop apps, android apps, scripts, games, graphic processing, sound processing, plugins, algorithms, optimization, consultation and much more else.
                                    </p>
                                    <p>
                                        The job price is case-to-case matter of discussion, but in general it's around $20 per estimated working hour.
                                    </p>
                                    <p>
                                        Our main selling point is that we aim for the mutual understanding and fast changes, so we organize work in such way, that you'll quickly get access to the scratch of the future app to look at it's appearance, click some buttons and give you the base for the feedback already in the early development stages.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.introSectionPopularProjects}>
                            <div className={styles.introSectionColumnContainer}>
                                <div className={styles.introColumnContainerHeader}>
                                    <div className={styles.popularProjects}>
                                        <div className={styles.popularProjectsContainer}>
                                            <h2 className={styles.introColumnContainerTitle}>Our popular projects</h2>
                                            <ul>
                                                {
                                                    popularProjects.map( (project, i) => {
                                                        return (
                                                            <li key={i}>
                                                                <a href={project.product} rel="noopener noreferrer" target='_blank'>{project.title}</a>
                                                                <span>({
                                                                    <a href={project.src} rel="noopener noreferrer" target='_blank'>src</a>
                                                                })</span>
                                                            </li>
                                                        );
                                                    } )
                                                }
                                            </ul>
                                            <div className={styles.githubLogo}>
                                                <a href='https://github.com/klesun' target='_blank' rel='noopener noreferrer'>
                                                    <GithubLogo width={24} height={28}/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.lastSection}>
                <div className={styles.container}>
                    <div className={styles.lastSectionMain}>
                        <div className={styles.lastSectionMainContainer}>
                            <div className={styles.secondarySectionMainDescription}>
                                <p className={styles.lastSectionParagraph}>
                                    To make an order, you can contact us on safronevev@gmail.com (email address subject to change)
                                </p>
                            </div>
                            <div className={styles.introColumnContainerHeader}>
                                <h3 className={styles.lastSectionMainTitle}>Dirty deeds done dirt cheep.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Body;