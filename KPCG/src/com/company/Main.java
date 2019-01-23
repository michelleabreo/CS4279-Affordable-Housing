package com.company;
import java.util.*;


public class Main {
    private static final List<String> COLORS  =
            Arrays.asList("RED", "BLACK");
    private static final List<String> RANKS  =
            Arrays.asList("ACE" ,"KING", "QUEEN", "JACK",
                    "TEN", "NINE", "EIGHT", "SEVEN", "SIX",
                    "FIVE", "FOUR", "THREE", "TWO");
    private static final List<String> SUITS  =
            Arrays.asList("SPADES", "CLUBS", "DIAMONDS", "HEARTS");
    private static int SCORE = 0;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // CARD GAME INTRODUCTION
        String cont;
        do {
            SCORE = 0;
            header();
            stepOne(sc);
            System.out.println("Play again? (Y|N)");
        }while(!sc.nextLine().toUpperCase().equals("N"));
    }

    // DEVIATION HEADER
    public static void header(){
        System.out.println("----------------------------------------------------------------------");
        System.out.println("                 Deviation - The Card Game of Champions");
        System.out.println("----------------------------------------------------------------------");
    }

    // DETERMINE RESULTS
    public static boolean printRes(boolean res){
        if(res) {
            System.out.println("Correct!");
        } else {
            System.out.println("Incorrect! Back to Step One!");
        }
        return res;
    }

    // STEP 1 - COLOR GUESS
    public static void stepOne(Scanner sc){
        System.out.println("\n**STEP ONE**");
        System.out.println("Nous allons! Guess the next card's color (RED or BLACK): ");
        String input = sc.nextLine().toUpperCase();
        List<String> randCard = generateRandomCard();
        System.out.println("The color you picked was: " + input);
        System.out.println("The next card generated was: " + printRandomCard(randCard));
        if(printRes(randCard.get(0).equals(input))) stepTwo(sc, randCard);
        else{
            SCORE += 3;
            stepOne(sc);
        }    }

    // STEP 2 - RANK GUESS
    public static void stepTwo(Scanner sc, List<String> randPrev){
        System.out.println("\n**STEP TWO**");
        System.out.println("Almost there! Is the next card's rank higher than the last? (Y or N):");
        String input = sc.nextLine().toUpperCase();
        List<String> randCard = generateRandomCard();
        System.out.println("The rank you picked was: " + input);
        System.out.println("The previous card generated was: " + printRandomCard(randPrev));
        System.out.println("The next card generated was: " + printRandomCard(randCard));
        boolean res = (input.equals("Y")) ?
                RANKS.indexOf(randCard.get(1)) <= RANKS.indexOf(randPrev.get(1)):
                RANKS.indexOf(randCard.get(1)) >= RANKS.indexOf(randPrev.get(1));
        if(res) stepThree(sc);
        else{
            SCORE += 2;
            stepOne(sc);
        }
    }

    // STEP 3 - RANK GUESS
    public static void stepThree(Scanner sc){
        System.out.println("\n**STEP THREE**");
        System.out.println("Last one! Guess the next card's suit (SPADES, HEARTS, DIAMONDS, or CLUBS):");
        String input = sc.nextLine().toUpperCase();
        List<String> randCard = generateRandomCard();
        System.out.println("The suit you picked was: " + input);
        System.out.println("The suit card generated was: " + printRandomCard(randCard));
        if(printRes(randCard.get(2).equals(input))){
            System.out.println("\nCongratulations! You've beaten Deviation!");
            System.out.println("Your score was: " + SCORE);
        } else{
            SCORE++;
            stepOne(sc);
        }
    }

    // RANDOM CARD GENERATOR (ARRAY - {COLOR, RANK, SUIT])
    public static List<String> generateRandomCard(){
        List<String> card = new LinkedList<String>();
        card.add(generateRandomColor());
        card.add(generateRandomRank());
        card.add(generateRandomSuit());
        return card;
    }

    // RANDOM CARD PRINTER (STRING)
    public static String printRandomCard(List<String> card){
        return (card.get(0) + " " + card.get(1) + " of " + card.get(2));
    }

    // RANDOM COLOR GENERATOR
    public static String generateRandomColor(){
        return COLORS.get((int) Math.floor((Math.random() * COLORS.size())));
    }

    // RANDOM RANK GENERATOR
    public static String generateRandomRank(){
        return RANKS.get((int) Math.floor((Math.random() * RANKS.size())));
    }

    // RANDOM SUIT GENERATOR
    public static  String generateRandomSuit(){
        return SUITS.get((int)Math.floor((Math.random() * SUITS.size())));
    }
}
