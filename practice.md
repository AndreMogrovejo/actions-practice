# Ejercicio de Práctica: Cálculo de Totales de Transacciones

## Descripción

Crea una función en JavaScript que reciba un arreglo de objetos representando transacciones financieras. Cada objeto tiene dos propiedades:
- `amount` (un número que representa el monto de la transacción)
- `type` (una cadena que puede ser `"money🤑"` o `"melomerezco🗿"`).

La función debe devolver un objeto que contenga dos propiedades:
- `totalIncome` (el total de ingresos)
- `totalExpenses` (el total de gastos)

Si el arreglo de transacciones está vacío, la función debe devolver ambos totales como 0.

## Ejemplo

**Entrada:**

```javascript
[
  { amount: 100, type: 'money🤑' },
  { amount: 50, type: 'melomerezco🗿' },
  { amount: 200, type: 'money🤑' },
  { amount: 30, type: 'melomerezco🗿' }
]
```

**Salida:**

```javascript
{
  totalIncome: 300,
  totalExpenses: 80
}

```