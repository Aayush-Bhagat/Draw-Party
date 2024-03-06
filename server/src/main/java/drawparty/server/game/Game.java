package drawparty.server.game;

import drawparty.server.User.User;
import lombok.Data;

import java.util.List;
import java.util.UUID;
@Data
public class Game {
    private UUID id;
    private UUID roomId;
    private Team teamOne;
    private Team teamTwo;
    private User creator;
    private boolean isFinished;
    private List<List<Card>> cards;

    public Game(UUID id,
                UUID roomId,
                Team teamOne,
                Team teamTwo,
                User creator,
                boolean isFinished,
                List<List<Card>> cards
                ){

        this.id = id;
        this.roomId = roomId;
        this.teamOne = teamOne;
        this.teamTwo = teamTwo;
        this.creator = creator;
        this.isFinished = isFinished;
        this.cards = cards;
    }

    public Game(UUID roomId,
                Team teamOne,
                Team teamTwo,
                User creator,
                boolean isFinished,
                List<List<Card>> cards
    ){

        this.id = UUID.randomUUID();
        this.roomId = roomId;
        this.teamOne = teamOne;
        this.teamTwo = teamTwo;
        this.creator = creator;
        this.isFinished = isFinished;
        this.cards = cards;
    }


}
