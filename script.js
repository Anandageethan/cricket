document.addEventListener('DOMContentLoaded', function() {
    loadLatestNews();
    loadTeams();
    loadRankings();
    loadPlayerStats();
    loadLiveScores();
    loadWorldCupPointsTable();

    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function loadLatestNews() {
    const newsContent = document.getElementById('news-content');
    newsContent.innerHTML = `
        <ul>
            <li>Breaking: India wins the championship with a thrilling finish!</li>
            <li>Transfer News: Steve Smith moves to England for a record fee.</li>
            <li>Upcoming: The much-anticipated match between Australia and New Zealand.</li>
        </ul>
    `;
}

function loadTeams() {
    const teamsContent = document.getElementById('teams-content');
    teamsContent.innerHTML = `
        <div>
            <img src="images/india.png" alt="India Logo" class="team-logo">
            <p>India</p>
        </div>
        <div>
            <img src="images/australia.png" alt="Australia Logo" class="team-logo">
            <p>Australia</p>
        </div>
        <div>
            <img src="images/england.png" alt="England Logo" class="team-logo">
            <p>England</p>
        </div>
        <div>
            <img src="images/new zealand.png" alt="New Zealand Logo" class="team-logo">
            <p>New Zealand</p>
        </div>
        <div>
            <img src="images/pakistan.png" alt="Pakistan Logo" class="team-logo">
            <p>Pakistan</p>
        </div>
    `;
}

function loadRankings() {
    loadT20Rankings();
    loadTestRankings();
    loadOdiRankings();
}

function loadT20Rankings() {
    const t20RankingsContent = document.getElementById('t20-rankings-content');
    t20RankingsContent.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>India</td>
                    <td>275</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Australia</td>
                    <td>260</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>England</td>
                    <td>245</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>New Zealand</td>
                    <td>230</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Pakistan</td>
                    <td>215</td>
                </tr>
            </tbody>
        </table>
    `;
}

function loadTestRankings() {
    const testRankingsContent = document.getElementById('test-rankings-content');
    testRankingsContent.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>India</td>
                    <td>300</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Australia</td>
                    <td>290</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>England</td>
                    <td>270</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>New Zealand</td>
                    <td>250</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Pakistan</td>
                    <td>240</td>
                </tr>
            </tbody>
        </table>
    `;
}

function loadOdiRankings() {
    const odiRankingsContent = document.getElementById('odi-rankings-content');
    odiRankingsContent.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>India</td>
                    <td>270</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Australia</td>
                    <td>260</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>England</td>
                    <td>250</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>New Zealand</td>
                    <td>240</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Pakistan</td>
                    <td>230</td>
                </tr>
            </tbody>
        </table>
    `;
}

function loadPlayerStats() {
    const statsContent = document.getElementById('stats-content');
    statsContent.innerHTML = `
        <div>
            <img src="C:\\Users\\ANANDGEETHAN\\OneDrive\\Desktop\\New folder\\Images\\Kane Williamson.jfif" alt="Kane Williamson Photo" class="player-photo"> 
            <p>Kane Williamson</p>
            <p>Runs - 9000, Wickets - 5</p>
        </div>
        <div>
            <img src="C:\\Users\\ANANDGEETHAN\\OneDrive\\Desktop\\New folder\\Images\\Virat Kohli.jfif" alt="Virat Kohli Photo" class="player-photo"> 
            <p>Virat Kohli</p>
            <p>Runs - 10000, Wickets - 0</p>
        </div>
        <div>
            <img src="C:\\Users\\ANANDGEETHAN\\OneDrive\\Desktop\\New folder\\Images\\joe root.jfif" alt="Joe Root Photo" class="player-photo"> 
            <p>Joe Root</p>
            <p>Runs - 8500, Wickets - 15</p>
        </div>
        <div>
            <img src="C:\\Users\\ANANDGEETHAN\\OneDrive\\Desktop\\New folder\\Images\\steve smith.jfif" alt="Steve Smith Photo" class="player-photo"> 
            <p>Steve Smith</p>
            <p>Runs - 8000, Wickets - 0</p>
        </div>
        <div>
            <img src="C:\\Users\\ANANDGEETHAN\\OneDrive\\Desktop\\New folder\\Images\\babar azam.jfif" alt="Babar Azam Photo" class="player-photo"> 
            <p>Babar Azam</p>
            <p>Runs - 7800, Wickets - 3</p>
        </div>
    `;
}

function loadLiveScores() {
    const scoresContent = document.getElementById('scores-content');
    scoresContent.innerHTML = `
        <ul>
            <li>Match 1: India vs Australia - 200/3 (20 overs)</li>
            <li>Match 2: England vs New Zealand - 180/5 (18 overs)</li>
        </ul>
    `;
}

function loadWorldCupPointsTable() {
    const worldcupContent = document.getElementById('worldcup-content');
    worldcupContent.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Lost</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>India</td>
                    <td>10</td>
                    <td>8</td>
                    <td>2</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>Australia</td>
                    <td>10</td>
                    <td>7</td>
                    <td>3</td>
                    <td>14</td>
                </tr>
                <tr>
                    <td>England</td>
                    <td>10</td>
                    <td>6</td>
                    <td>4</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>New Zealand</td>
                    <td>10</td>
                    <td>5</td>
                    <td>5</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Pakistan</td>
                    <td>10</td>
                    <td>4</td>
                    <td>6</td>
                    <td>8</td>
                </tr>
            </tbody>
        </table>
    `;
}

function showPlayerInfo(playerName) {
    const playerInfoContent = document.getElementById('player-info-content');
    
    const playerData = {
        'Virat Kohli': 'Virat Kohli is a top-order batsman known for his aggressive style. Recently scored 10000 runs in the season.',
        'Kane Williamson': 'Kane Williamson is an all-rounder with 9000 runs and 5 wickets this season. A key player for their team.',
        'Joe Root': 'Joe Root has been consistent throughout the season with 8500 runs and 15 wickets.',
        'Steve Smith': 'Steve Smith is known for his powerful hitting, accumulating 8000 runs and taking 0 wickets.',
        'Babar Azam': 'Babar Azam is a reliable performer with 7800 runs and 3 wickets.'
    };
    
    const playerImages = {
        'Virat Kohli': 'C:\\Users\\ANANDGEETHAN\\OneDrive\\Desktop\\New folder\\Images\\Virat Kohli.jfif',
        'Kane Williamson': 'C:\\Users\\ANANDGEETHAN\\OneDrive\\Desktop\\New folder\\Images\\Kane Williamson.jfif',
        'Joe Root': 'C:\\Users\\ANANDGEETHAN\\OneDrive\\Desktop\\New folder\\Images\\joe root.jfif',
        'Steve Smith': 'C:\\Users\\ANANDGEETHAN\\OneDrive\\Desktop\\New folder\\Images\\steve smith.jfif',
        'Babar Azam': 'C:\\Users\\ANANDGEETHAN\\OneDrive\\Desktop\\New folder\\Images\\babar azam.jfif'
    };
    
    playerInfoContent.innerHTML = `
        <img src="${playerImages[playerName]}" alt="${playerName} Photo" class="player-photo">
        <div>
            <p><strong>${playerName}</strong></p>
            <p>${playerData[playerName] || 'No information available.'}</p>
        </div>
    `;
    
    document.getElementById('player-info').style.display = 'block';
}

function searchPlayers() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase();
    const players = document.querySelectorAll('#stats-content > div');
    
    players.forEach(player => {
        const playerName = player.querySelector('p').textContent.toLowerCase();
        if (playerName.includes(searchValue)) {
            player.style.display = 'block';
        } else {
            player.style.display = 'none';
        }
    });
}

function filterByTeam() {
    const selectedTeam = document.getElementById('team-filter').value;
    const players = document.querySelectorAll('#stats-content > div');
    
    players.forEach(player => {
        const playerInfo = player.querySelector('p').textContent;
        if (selectedTeam === '' || playerInfo.includes(selectedTeam)) {
            player.style.display = 'block';
        } else {
            player.style.display = 'none';
        }
    });
}

function refreshLiveScores() {
    loadLiveScores();  // Refresh the live scores
}
