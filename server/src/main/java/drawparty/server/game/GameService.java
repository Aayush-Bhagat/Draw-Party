package drawparty.server.game;

import drawparty.server.User.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class GameService {

    public Game getGameById(String gameId){
        return new Game(
                UUID.randomUUID(),
                new Team(20,
                        8,
                        new User("Matt"),
                        List.of(new User("John"), new User("Sally"))
                ),
                new Team(20,
                        8,
                        new User("Mark"),
                        List.of(new User("Miller"), new User("Kali"))
                ),
                new User("Creator"),
                false,
                List.of(List.of(new Card("card1", "team1", false)), List.of(new Card("card2", "team2", false)))
        );
    }

}
