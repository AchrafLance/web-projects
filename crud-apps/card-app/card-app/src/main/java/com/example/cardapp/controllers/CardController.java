package com.example.cardapp.controllers;

import com.example.cardapp.entities.Card;
import com.example.cardapp.services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/api/v1/cards")
public class CardController {
    CardService cardService;

    @Autowired
    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @GetMapping
    public List<Card> getCards(){
        return cardService.getAllCards();
    }

    @PostMapping
    public ResponseEntity<Card> createCard(@RequestBody Card card){
        cardService.addCard(card);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Card> deleteCard(@PathVariable Long id){
        cardService.deleteCard(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity<Card> deleteAll(){
        cardService.deleteAllCards();
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
