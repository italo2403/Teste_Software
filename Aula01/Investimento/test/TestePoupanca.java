/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author Flavia
 */
public class TestePoupanca {
    
    public TestePoupanca() {
    }
    @Test
    public void testIvest() {
    Double valor =1000.00; //valor investido
    int tempo =3; //tempo de meses que ficará investido
    Double  retorno = 1015.075125;
    Poupanca poup = new Poupanca(valor, tempo);
    assertEquals(retorno, poup.simulador());   // verifica se o valor retornado é igual a valor de uma variável 
    }
    
     
}
