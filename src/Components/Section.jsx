function Section() {
  return (
    <div>
      <form class="flex flex-col gap-4 p-4 border border-gray-300 rounded-md">
        <h2 class="text-xl font-bold">Enter Code</h2>

        <div>
          <label>Access Code</label>
          <input type="text" placeholder="Enter your access code" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Section;
