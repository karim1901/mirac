'use client'
import { useState } from "react";

export default function TextAreaExample() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    // هنا يتم حفظ النص كما هو مع فواصل الأسطر
    console.log("النص المحفوظ:", text);
  };

  return (
    <div className="p-4 max-w-md">
      <textarea
        className="w-full h-40 p-2 border rounded-md whitespace-pre-wrap"
        value={text}
        onChange={handleChange}
        placeholder="اكتب هنا..."
      />
      <button
        onClick={handleSave}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        حفظ
      </button>

      <div className="mt-4 p-2 border rounded whitespace-pre-wrap bg-gray-50">
        <h2 className="font-semibold mb-2">المعاينة:</h2>
        {text || "سيظهر النص هنا مع نفس تنسيق الأسطر."}
      </div>
    </div>
  );
}
