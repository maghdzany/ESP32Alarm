import { useState } from 'preact/hooks';

export default function TestPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-4xl font-bold">Testing 123 Dicoba</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-2">Buttons</h2>
        <div className="space-x-2">
          <button className="btn">Default</button>
          <button className="btn btn-neutral">Default</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Text</h2>
        <p className="text-base-content">This is base content text.</p>
        <p className="text-primary">This is primary text.</p>
        <p className="text-secondary">This is secondary text.</p>
        <p className="text-accent">This is accent text.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Alert</h2>
        <div className="alert alert-info mb-2">
          <span>This is an info alert.</span>
        </div>
        <div className="alert alert-success mb-2">
          <span>This is a success alert.</span>
        </div>
        <div className="alert alert-warning mb-2">
          <span>This is a warning alert.</span>
        </div>
        <div className="alert alert-error">
          <span>This is an error alert.</span>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Card</h2>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="/api/placeholder/400/200" alt="Placeholder" /></figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>This is a sample card component from daisyUI.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Action</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Tabs</h2>
        <div className="tabs">
          <a className="tab tab-lifted">Tab 1</a> 
          <a className="tab tab-lifted tab-active">Tab 2</a> 
          <a className="tab tab-lifted">Tab 3</a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Toggle</h2>
        <input type="checkbox" className="toggle" checked />
        <input type="checkbox" className="toggle toggle-primary" checked />
        <input type="checkbox" className="toggle toggle-secondary" checked />
        <input type="checkbox" className="toggle toggle-accent" checked />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Progress</h2>
        <progress className="progress w-56" value="0" max="100"></progress>
        <progress className="progress progress-primary w-56" value="40" max="100"></progress>
        <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
        <progress className="progress progress-accent w-56" value="100" max="100"></progress>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Counter (Interactive)</h2>
        <div className="flex items-center space-x-2">
          <button className="btn btn-circle" onClick={() => setCount(count - 1)}>-</button>
          <span className="text-2xl">{count}</span>
          <button className="btn btn-circle" onClick={() => setCount(count + 1)}>+</button>
        </div>
      </section>
    </div>
  );
}