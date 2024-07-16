// Step 1: Import necessary hooks and ReactMarkdown component
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Step 2: Define the MarkdownEditor component
function MarkdownEditor() {
  // Step 3: Initialize markdown state with default text
  const [markdown, setMarkdown] = useState("type markdown here");

  // Step 4: Handle changes in the textarea and update state
  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  // Step 5: Render the component
  return (
    <div>
      <textarea
        value={markdown}
        onChange={handleChange}
        rows="10"
        cols="50"
        style={{ width: '100%', height: '150px', marginBottom: '20px' }}
      />
      <div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <div>
        <p>Reversed Sentence: {reverseSentence(markdown)}</p>
      </div>
    </div>
  );
}

function reverseSentence(sentence) {
  // Split the sentence into words, reverse the array of words, and join them back into a sentence
  const reversed = sentence.split(' ').reverse().join(' ');

  // Capitalize the first letter of the reversed sentence and make the rest lowercase
  const capitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();

  return capitalized;
}

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

// Flatten the array of arrays and map to get names
const names = data.flat().map(person => person.name);

// Step 1: Import necessary hooks and ReactMarkdown component
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Step 2: Define the MarkdownEditor component
function MarkdownEditor() {
  // Step 3: Initialize markdown state with default text
  const [markdown, setMarkdown] = useState("type markdown here");

  // Step 4: Handle changes in the textarea and update state
  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  // Step 5: Render the component
  return (
    <div>
      <textarea
        value={markdown}
        onChange={handleChange}
        rows="10"
        cols="50"
        style={{ width: '100%', height: '150px', marginBottom: '20px' }}
      />
      <div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <div>
        <p>Reversed Sentence: {reverseSentence(markdown)}</p>
      </div>
    </div>
  );
}

function reverseSentence(sentence) {
  // Split the sentence into words, reverse the array of words, and join them back into a sentence
  const reversed = sentence.split(' ').reverse().join(' ');

  // Capitalize the first letter of the reversed sentence and make the rest lowercase
  const capitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();

  return capitalized;
}

  