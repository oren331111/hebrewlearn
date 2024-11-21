import { motion } from 'framer-motion';
import { Award, Star, Trophy, Target } from 'lucide-react';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  progress: number;
  unlocked: boolean;
  unlockedAt?: Date;
  xpReward: number;
  category: string;  // Added this property
}

interface AchievementCenterProps {
  achievements: Achievement[];
}

export function AchievementCenter({ achievements }: AchievementCenterProps) {
  const categories = [
    { id: 'streak', name: 'Consistency', icon: Target },
    { id: 'accuracy', name: 'Accuracy', icon: Star }
  ] as const;

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center mb-6">
            <category.icon className="h-6 w-6 text-brand-600 mr-3" />
            <h3 className="text-xl font-bold">{category.name}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements
              .filter((a) => a.category === category.id)
              .map((achievement) => (
                <div
                  key={achievement.id}
                  className={`relative p-4 rounded-lg border-2 ${
                    achievement.unlocked
                      ? 'border-brand-500 bg-brand-50'
                      : 'border-gray-200'
                  }`}
                >
                  {achievement.unlocked && (
                    <div className="absolute top-2 right-2">
                      <Trophy className="h-5 w-5 text-yellow-400" />
                    </div>
                  )}

                  <Award className="h-8 w-8 text-brand-600 mb-2" />
                  <h4 className="font-semibold mb-1">{achievement.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {achievement.description}
                  </p>

                  {!achievement.unlocked && (
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-500 rounded-full"
                          style={{ width: `${achievement.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 text-right">
                        {achievement.progress}% complete
                      </p>
                    </div>
                  )}

                  {achievement.unlocked && achievement.unlockedAt && (
                    <div className="text-sm text-gray-500">
                      Unlocked: {new Date(achievement.unlockedAt).toLocaleDateString()}
                    </div>
                  )}

                  <div className="mt-2 text-sm font-medium text-brand-600">
                    +{achievement.xpReward} XP
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}