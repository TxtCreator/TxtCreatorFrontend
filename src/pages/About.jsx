import React from 'react';

import ComponentHomeContainer from '../components/HomeContainer';
import ComponentFooter from '../components/Footer';

function About() {
    return (
        <>
            <div className="about-container">                
                <h1>O Nas</h1>
                <span>
                    Jesteśmy małą grupką programistów która stwierdziła że stworzy coś dla community minecraft, pierwszy raz
                    ukazał się od nas TxtMaker, aplikacja do tworzenia tekstur packów do gry minecraft. Niestety TxtMaker skończył 
                    swoją działalność i zapomnieliśmy o nim. Nie dawno wpadliśmy na pomysł aby 
                    znowić działalność tej aplikacji ale pomyleliśmy "Po co tworzyć aplikacje skoro łatwiej robić wszystko w swojej przeglądarce
                    do tego nie będzie problemów z wersją javy i systemem operacyjnym"
                    i zaczeliśmy działać zrobiliśmy rebranding z <b>TxtMaker</b> na <b>TxtCreator</b> oraz zmieniliśmy kolory z czerwonego 
                    na niebieski oraz stworzyliśmy stronę i serwer.
                    <br /><br />
                    Kod aplikacji jest dostępny w naszej <a href="https://github.com/txtcreator">organizacji Github</a>. Uważamy że open source
                    jest o wiele lepszą rzeczą gdyż użytkownik wie że nie jest szpiegowany ani że nie używamy żadnych dziwnych skryptów 
                    (w sumie możecie też zwyzywać nas za nasz code-style i za estetyka style.css... nie patrz tam proszę). Stary TxtMaker
                    był w całości napisany w <b>Java</b> aktualnie cała aplikacja jest napisana w <b>C# (Serwer)</b> a strona w <b>JavaScript z użyciem React i CSS</b>.
                    <br /><br />
                    <h1>Nasz team</h1>
                    <div class="about-container-avatars">
                        <div>
                            <img src="/avatar_nes0x.jpeg" width="128px" height="128px" /><br /><br />
                            <span className="avatars-title">Nes0x</span><br />
                            <span className="avatars-desc">Prorgamista, <a href="https://github.com/nes0x">Github</a></span>
                        </div>
                        <div>
                            <img src="/avatar_solindek.png" width="128px" height="128px" /><br /><br />
                            <span className="avatars-title">Solindek</span><br />
                            <span className="avatars-desc">Programista, <a href="https://github.com/solindekdev">Github</a></span>
                        </div>
                        <div>
                            <img src="/avatar_vynt1s.jpeg" width="128px" height="128px" /><br /><br />
                            <span className="avatars-title">Vynt1s</span><br />
                            <span className="avatars-desc">Grafik</span>
                        </div>
                    </div>
                </span>
            </div>
            <ComponentFooter />
        </>
    );
}

export default About;