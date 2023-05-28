import java.util.ArrayList;

public class Main {

	private static ArrayList<Cliente> listaClientes;
	public static void main(String[] args) {
		listaClientes = new ArrayList<Cliente>();

		Cliente Cliente;
		listaClientes.add(new ContaCorrente(Cliente));
		
		Conta cc = new ContaCorrente(Cliente);
		Conta poupanca = new ContaPoupanca(Cliente);

		cc.depositar(200);
		cc.transferir(200, poupanca);
		
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();
	}

}
