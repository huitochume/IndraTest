package com.mycompany.vecinos;

public class vecinos {

    public static void main(String[] args) {
        int vecinos[] = {1, 0, 0, 0, 0, 1, 0, 0};
        int newVecinos[] = new int[8];
        int temp[];
        int dias = 1;

        for (int d = 0; d <= dias; d++) {
            for (int i = 0; i < vecinos.length; i++) {
                if (vecinos[i--] == vecinos[i++]) {
                    newVecinos[i] = 0;
                } else {
                    
                    newVecinos[i] = 1;
                }
            }
            System.out.println(newVecinos);
        }

    }
}
