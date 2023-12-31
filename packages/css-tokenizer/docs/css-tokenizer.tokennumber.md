<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/css-tokenizer](./css-tokenizer.md) &gt; [TokenNumber](./css-tokenizer.tokennumber.md)

## TokenNumber interface

**Signature:**

```typescript
export interface TokenNumber extends Token<TokenType.Number, {
    value: number;
    type: NumberType;
    signCharacter?: '+' | '-';
}> 
```
**Extends:** [Token](./css-tokenizer.token.md)<!-- -->&lt;[TokenType.Number](./css-tokenizer.tokentype.md)<!-- -->, { value: number; type: [NumberType](./css-tokenizer.numbertype.md)<!-- -->; signCharacter?: '+' \| '-'; }&gt;

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [signCharacter?](./css-tokenizer.tokennumber.signcharacter.md) |  | '+' \| '-' | _(Optional)_ The sign character as it appeared in the source. This is only useful if you need to determine if a value was written as "2" or "+2". |
|  [type](./css-tokenizer.tokennumber.type.md) |  | [NumberType](./css-tokenizer.numbertype.md) | <code>integer</code> or <code>number</code> |
|  [value](./css-tokenizer.tokennumber.value.md) |  | number | The numeric value. |
