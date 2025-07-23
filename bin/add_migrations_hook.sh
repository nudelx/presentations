#!/bin/bash

filename=".git/hooks/post-merge"
template="../../bin/git_post_merge_hook.sh"
rm -f $filename && ln -s $template $filename && chmod +x $filename && echo " 🙌  git hook installed "

echo " 🚀  npm ci hook activated "