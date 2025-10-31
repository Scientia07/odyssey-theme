import { Content } from '@builder.io/sdk-react';

interface Props {
  model: string;
  apiKey: string;
}

export default function BuilderPage({ model, apiKey }: Props) {
  if (!apiKey) {
    return (
      <div style={{ padding: '2rem', background: '#ffe6e6', border: '2px solid #ff0000', borderRadius: '8px', margin: '2rem' }}>
        <h2>⚠️ Builder.io API Key fehlt!</h2>
        <p>Bitte füge deinen Builder.io API Key in die <code>.env</code> Datei ein:</p>
        <pre>PUBLIC_BUILDER_API_KEY=dein_key_hier</pre>
        <p>Siehe <strong>BUILDER-SETUP.md</strong> für Details.</p>
      </div>
    );
  }

  return (
    <Content
      model={model}
      apiKey={apiKey}
    />
  );
}
