import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';
import { readingLevels } from '@/data/stories';

interface LevelProgressProps {
  currentXP: number;
  level: number;
  progress: number;
}

export function LevelProgress({ currentXP, level, progress }: LevelProgressProps) {
  const currentLevel = readingLevels[level - 1];
  const nextLevel = readingLevels[level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Level {level}</h3>
        <span className="text-brand-600 font-semibold">{currentLevel?.name}</span>
      </div>

      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block text-brand-600">
              Progress to Level {level + 1}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-brand-600">
              {progress}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-brand-100">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand-600"
          />
        </div>
        <div className="text-xs text-gray-600">
          {currentXP} / {nextLevel?.xpRequired} XP
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold mb-2">Level Benefits:</h4>
        <ul className="space-y-2">
          {currentLevel?.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <Star className="h-4 w-4 text-brand-600 mr-2" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {nextLevel && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-2">Next Level Unlocks:</h4>
          <ul className="space-y-2">
            {nextLevel.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-sm text-gray-500">
                <Award className="h-4 w-4 text-gray-400 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}