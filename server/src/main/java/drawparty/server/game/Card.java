package drawparty.server.game;

import lombok.Data;

@Data
public class Card {
    private String title;
    private String team;
    private boolean guessed;

    public Card(
            String title,
            String team,
            boolean guessed
    ){
        this.title = title;
        this.team = team;
        this.guessed = guessed;
    }
}
