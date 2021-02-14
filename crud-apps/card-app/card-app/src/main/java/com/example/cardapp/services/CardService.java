package com.example.cardapp.services;

import com.example.cardapp.entities.Card;
import com.example.cardapp.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardService {
  CardRepository cardRepository;

    @Autowired
    public CardService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public List<Card> getAllCards(){
        return cardRepository.findAll();
    }

    public void addCard(Card card){
        cardRepository.save(card);
    }

   public void deleteCard(Long id){
        cardRepository.deleteById(id);
   }

    public void deleteAllCards() {
        cardRepository.deleteAll();
    }
}
