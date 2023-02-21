import React from 'react';

import ComponentFooter from '../components/Footer';

function About() {
    return (
        <>
            <div className="about-container">                
                <h1>O Nas</h1>
                <span>
                    Jesteśmy małą grupką programistów, która stwierdziła, że stworzy coś dla community minecraft'a. Pierwszy raz
                    ukazał się od nas TxtMaker, aplikacja do tworzenia teksturpacków. Niestety TxtMaker skończył
                    swoją działalność, porzuciliśmy go. Niedawno wpadliśmy na pomysł, aby
                    odnowić działalność tej aplikacji, ale pomyśleliśmy "Po co tworzyć aplikacje skoro łatwiej robić wszystko w swojej przeglądarce" -
                    nie będzie problemów z wersją javy i systemem operacyjnym
                    i zaczeliśmy działać, zrobiliśmy rebranding z <b>TxtMaker</b> na <b>TxtCreator</b> oraz zmieniliśmy kolorystyke z czerwonego
                    na niebieski, stworzyliśmy stronę i serwer.
                    <br /><br />
                    Kod aplikacji jest dostępny w naszej <a target="_blank" href="https://github.com/txtcreator">organizacji Github</a>. Uważamy, że open source
                    jest o wiele lepszym rozwiązaniem, gdyż użytkownik wie, że nie jest szpiegowany ani, że nie używamy żadnych dziwnych skryptów
                    (w sumie możecie też zwyzywać nas za nasz code-style i za estetyka style.css... nie patrzcie tam proszę). TxtMaker
                    był w całości napisany w <b>Javie</b> aktualnie cała aplikacja jest napisana w <b>C# (Serwer)</b> a strona w <b>JavaScript z użyciem React i CSS</b>.
                    <br /><br />
                    <h1>Nasz team</h1>
                    <div className="about-container-avatars">
                        <div>
                            <img src="/avatar_nes0x.jpeg" width="128px" height="128px" /><br /><br />
                            <span className="avatars-title">Nes0x</span><br />
                            <span className="avatars-desc">Programista, <a target="_blank" href="https://github.com/Nes0x">Github</a></span>
                        </div>
                        <div>
                            <img src="/avatar_solindek.png" width="128px" height="128px" /><br /><br />
                            <span className="avatars-title">Solindek</span><br />
                            <span className="avatars-desc">Programista, <a target="_blank" href="https://github.com/SolindekDev">Github</a></span>
                        </div>
                        <div>
                            <img src="/avatar_vynt1s.jpeg" width="128px" height="128px" /><br /><br />
                            <span className="avatars-title">Vynt1s</span><br />
                            <span className="avatars-desc">Grafik</span>
                        </div>
                    </div>
                    <h1>Osoby, które nam pomagają</h1>
                    <div className="about-container-avatars">
                        <div>
                            <img src="/avatar_kalissoo.png" width="128px" height="128px" /><br /><br />
                            <span className="avatars-title">KaliSsOO</span><br />
                            <span className="avatars-desc">Autor niektórych tekstur</span>
                        </div>
                    </div>
                </span>
            </div>
            <ComponentFooter />
        </>
    );
}

export default About;