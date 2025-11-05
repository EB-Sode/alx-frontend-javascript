// task_5/js/main.ts

// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: 'Major';
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'Major' };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'Minor' };
}

// Example usage (optional for testing)
const major1: MajorCredits = { credits: 30, brand: 'Major' };
const major2: MajorCredits = { credits: 20, brand: 'Major' };
const totalMajor = sumMajorCredits(major1, major2);

const minor1: MinorCredits = { credits: 10, brand: 'Minor' };
const minor2: MinorCredits = { credits: 5, brand: 'Minor' };
const totalMinor = sumMinorCredits(minor1, minor2);

console.log('Total Major Credits:', totalMajor);
console.log('Total Minor Credits:', totalMinor);
