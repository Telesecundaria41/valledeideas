import React from 'react';

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type Option = {
  text: string;
  xp: number;
  feedback: string;
  consequence: string;
  resourceSummary?: string;
  resourceLink?: { label: string; url: string };
};

export type Situation = {
  id: number;
  title: string;
  act: string;
  description: string;
  options: Option[];
  badgeId?: string;
};

export type InteractiveActivity = {
  id: string;
  type: 'quiz' | 'dragDrop';
  question: string;
  options: string[];
  correctAnswer: string;
  feedback?: string;
};

export type ConceptDetail = {
  label: string;
  text: string;
  links: { label: string; url: string }[];
  activity?: InteractiveActivity;
};

export type Concept = {
  title: string;
  icon: React.ReactNode;
  source: string;
  description: string;
  details: ConceptDetail[];
};

export type StudentInfo = {
  name: string;
  gender: 'M' | 'F' | 'NB';
  gradeGroup: string;
};

export type GameState = {
  xp: number;
  badges: string[];
  currentSituation: number;
  view: 'intro' | 'registration' | 'library' | 'adventure' | 'finished';
  attempts: number;
  student?: StudentInfo;
  completedActivities: string[];
};
