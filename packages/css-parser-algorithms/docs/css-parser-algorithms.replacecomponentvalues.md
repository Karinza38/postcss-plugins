<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/css-parser-algorithms](./css-parser-algorithms.md) &gt; [replaceComponentValues](./css-parser-algorithms.replacecomponentvalues.md)

## replaceComponentValues() function

Replace specific component values in a list of component values. A helper for the most common and simplistic cases when mutating an AST.

**Signature:**

```typescript
export declare function replaceComponentValues(componentValuesList: Array<Array<ComponentValue>>, replaceWith: (componentValue: ComponentValue) => ComponentValue | void): ComponentValue[][];
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  componentValuesList | Array&lt;Array&lt;[ComponentValue](./css-parser-algorithms.componentvalue.md)<!-- -->&gt;&gt; |  |
|  replaceWith | (componentValue: [ComponentValue](./css-parser-algorithms.componentvalue.md)<!-- -->) =&gt; [ComponentValue](./css-parser-algorithms.componentvalue.md) \| void |  |

**Returns:**

[ComponentValue](./css-parser-algorithms.componentvalue.md)<!-- -->\[\]\[\]
