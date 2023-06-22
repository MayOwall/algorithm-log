const isRightSkillTree = (skill_tree, skill) => {
  skill_tree = skill_tree.split("").filter((v) => skill.includes(v));
  for (let i = 0; i < skill_tree.length; i++) {
    if (skill[i] !== skill_tree[i]) return false;
  }
  return true;
};

const solution = (skill, skill_trees) => {
  skill = skill.split("");

  const rightSkillTrees = skill_trees.filter((skill_tree) =>
    isRightSkillTree(skill_tree, skill)
  );
  return rightSkillTrees.length;
};
