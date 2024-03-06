package drawparty.server.game;

import drawparty.server.User.User;
import lombok.Data;

import java.util.List;

@Data
public class Team {
    private int totalCards;
    private int cardsLeft;
    private User drawer;
    private List<User> guessers;

    public Team(int totalCards, int cardsLeft, User drawer, List<User> guessers){
        this.totalCards = totalCards;
        this.cardsLeft = cardsLeft;
        this.drawer = drawer;
        this.guessers = guessers;
    }
}
