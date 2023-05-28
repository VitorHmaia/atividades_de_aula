import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Por favor, digite o número da conta: ");
        int numero = input.nextInt();
        input.nextLine(); // limpa o buffer do scanner

        System.out.print("Por favor, digite o número da agência: ");
        String agencia = input.nextLine();

        System.out.print("Por favor, digite o nome do cliente: ");
        String nomeCliente = input.nextLine();

        System.out.print("Por favor, digite o saldo da conta: ");
        double saldo = input.nextDouble();

        System.out.println("Olá " + nomeCliente + ", obrigado por criar uma conta em nosso banco, sua agência é " + agencia + ", conta " + numero + " e seu saldo " + saldo + " já está disponível para saque.");

        input.close();
    }
